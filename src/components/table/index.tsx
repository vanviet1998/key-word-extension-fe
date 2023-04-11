import React from 'react'
import "./style.scss"
export interface IMyColumns {
  key: string,
  title: string
}



export interface IPropsMyTable {
  columns: IMyColumns[],
  dataSource: any
}

export default function MyTable(props: IPropsMyTable) {
  const { columns, dataSource } = props
  return (
    // <table>
    //   <tr>
    //     {
    //       columns.map((dataCol) => (
    //         <th key={dataCol.key}>{dataCol.title}</th>
    //       ))
    //     }
    //   </tr>
    //   {
    //     columns.map((dataCol) => (
    //       <tr >{
    //         dataSource.map(data => (
    //           <td>{data[dataCol.key]}</td>
    //         ))}
    //       </tr>
    //     ))
    //   }
    // </table>
    <table>
      <caption>Keyword Information</caption>
      <thead>
        <tr>
          {
            columns.map((dataCol) => (
              <th scope="col" key={dataCol.key}>{dataCol.title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map(data => (
            <tr>
              {
                columns.map((dataCol) => (
                  <td>{data[dataCol.key]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
