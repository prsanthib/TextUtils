import React from 'react'

export default function About(props) {

    const style = {
        backgroundColor : props.mode === 'dark'? '#1e0924':'white',
        color : props.mode === 'dark' ? 'white':'black'        
    }

  return (
    <div>
      <div className="accordion"  id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={style}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style} >
        <strong>Used to analyse your text</strong>Text Utils analyses your text and performs various tasks on text which includes converting text to upper case,to lower case,copying,searching also it shows no of words,no of characters.........
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={style}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style} >
        <strong>This is the second important thing in Text utils.</strong> It is free to use you get to use all the features without paying a single penny.You can access all the premium features for free of cost
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatable
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style} >
        <strong>This is the third item in text utils.</strong>  It is Compatable with all the browsers whether you use chrome,firefox or any other browser it is supported by all the browsers.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
