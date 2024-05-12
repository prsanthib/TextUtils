import React from 'react'

export default function Alert(props) {
    
  const capitalize = (word) =>
    {
        let p = word;
        return p.charAt(0).toUpperCase()+p.slice(1);
    }

  return (
    <div style={{height:'50px'}}>
    {props.alert && <div class="alert alert-success" role="alert">
         <strong>{capitalize(props.alert.type)}</strong>! "{props.alert.msg}"
    </div>
}
    </div>
  )
}
