import React, {FC, useEffect, useState} from 'react';
import {getAllRecipes} from "../../services/recipes.api.service";


const Users: FC = () => {

    let page = 1;
    const [users, setUsers] = useState<any>()

    useEffect(() => {
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

            .then(value => setUsers(value))

    }, [page]);


    console.log(users)
    console.log(page)

    return (
        <div>
            <button onClick={() => page = page + 1}>click</button>
        </div>
    );
};

export default Users;