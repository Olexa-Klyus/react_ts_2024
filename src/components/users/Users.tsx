import React, {FC, useEffect, useState} from 'react';
import {getAllRecipes} from "../../services/recipes.api.service";

interface IUser{
    id:number,
    name:string,
    date:string
}
const Users: FC = () => {

    const [page, setPage] = useState(845)

    const [users, setUsers] = useState<IUser[]>([])

    const inc = () => {
        setPage(page + 1)
        console.log(page)
    }

    const record = () => {
        const fs = require('fs');
        const writeStream = fs.createWriteStream('file.txt');
        const pathName = writeStream.path;

        users.forEach(value => writeStream.write(`${value}\n`));

        // the finish event is emitted when all data has been flushed from the stream
        writeStream.on('finish', () => {
            console.log(`wrote all the array data to file ${pathName}`);
        });

        // handle the errors on the write process
        writeStream.on('error', (err:any) => {
            console.error(`There is an error writing the file ${pathName} => ${err}`)
        });

        // close the stream
        writeStream.end();
    }


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

            .then(value => setUsers(newArr.concat(users, value)))


    }, [page]);


    console.log('users', users)


    return (
        <div>
            <button onClick={() => {
                inc()
            }}>click
            </button>
            <hr/>
            <button onClick={() => {
                record()
            }}>click
            </button>
        </div>
    );
};

export default Users;