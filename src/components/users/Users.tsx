import React, {FC, useEffect, useState} from 'react';
import {getAllRecipes} from "../../services/recipes.api.service";


interface IUser {
    id: number,
    name: string,
    date: string
}

const Users: FC = () => {

        const [page, setPage] = useState(845)

        const [users, setUsers] = useState<IUser[]>([])


        const incrementPage = () => {
            if (page > 0) {
                setPage(page - 1)
            }
            console.log(page)
        }

        //___________________________________________________________________________
        const saveInLocalStorage = () => {
            let usersStr = ''
            usersStr += users.map(value => (`${value.id}       ${value.name}                      ${value.date}                `))
            usersStr = usersStr.replaceAll(",", "\n")

            console.log(usersStr)

            localStorage.setItem("users", usersStr)
            // localStorage.setItem("users", JSON.stringify(users))
        }
        //___________________________________________________________________________

        // const [stateForTimer, setStateForTimer] = useState(30000);
        //
        // useEffect(() => {
        //     // повторити з інтервалом 2 секунди
        //     let timerId = setInterval(() =>
        //         incrementPage(), 3000)
        // }, [incrementPage]);


        // useEffect(() => {
        //     // зупинити через кнопку
        //     const timeout = setTimeout(() => {
        //         clearInterval(timerId);
        //         alert('стоп');
        //     }, stateForTimer);            
        // }, [stateForTimer, timerId]);


//___________________________________________________________________________

        useEffect(() => {
            const newArr: any = []

            getAllRecipes(page)
                .then(value => JSON.stringify(value.data))
                .then(value => value.slice(0, value.indexOf('","pag_html"')))
                .then(value => value.slice(value.indexOf('<div class=\\"table_cell number\\">')))
                .then(value => value.replaceAll('&#039;', ""))
                .then(value => value.replaceAll('.', ""))
                .then(value => value.replaceAll(/<div class=\\"table_cell number\\">/g, '"id":'))
                .then(value => value.replaceAll(/<div class=\\"table_cell name\\">/g, ',"name":"'))
                .then(value => value.replaceAll(/<div class=\\"table_cell date\\">/g, '","date":"'))
                .then(value => value.replaceAll(/<div>|<\/div>|\\n/g, ""))
                .then(value => value.replaceAll(/<div class=\\"table_row\\">/g, '"},{'))
                .then(value => '[{' + value + '"}]')
                .then(value => JSON.parse(value))

                .then(value => setUsers(newArr.concat(users, value.reverse())))


        }, [page]);


        // переробив для текстового файла


        console.log(users)


        return (
            <div>
                <button onClick={() => {
                    incrementPage()
                }}>click
                </button>

                <hr/>

                <button onClick={() => {
                    saveInLocalStorage()
                }}>record
                </button>

                <hr/>

                <button onClick={() => {
                    // setStateForTimer(1000)
                    // clearInterval(timerId)
                    alert('стоп');
                }}>clearTimeout(timeout)
                </button>

            </div>
        );
    }
;

export default Users;