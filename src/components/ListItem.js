import React from 'react'

const ListItem = props => {
  return (
    <div style={{ border: 'solid gray 1px' }}>
       <a href={props.item.url} target="_blank"> {props.item.title} </a>

        <p style={{ fontStyle: "italic", fontSize: "12px", color: "dark gray" }}> {props.item.created_at}</p>

        <p>{props.item.author}</p>
    </div>
  
    )
  }

    
export default ListItem