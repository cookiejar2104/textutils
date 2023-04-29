import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle]=useState({
        color :"black",
        backgroundColor: "white",
        padding: '5px',
        borderRadius: '10px'
    })
    const [btntext, setBtntext]=useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor: 'white',
                padding: '10px',
            })
            setBtntext("Enable Dark Mode")
        }else{
            setMyStyle({
                color :"white",
                backgroundColor: "#444444",
                padding: '10px',
                borderRadius: '5px'
            })
            setBtntext("Enable Light Mode")
        }
    }

    return (
        <>
            <div className="container my-5" style={myStyle}>
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nobis sint blanditiis veritatis molestias voluptatem exercitationem veniam temporibus quis hic numquam, autem illum sit voluptatum minima quaerat velit quisquam possimus ab sed dolores? Eos quidem, aut delectus, quis expedita nesciunt accusamus vero porro blanditiis, sit molestias. Exercitationem atque ea deleniti eligendi quae rem veniam error numquam aliquam itaque, porro est suscipit repellendus aut pariatur debitis sit id quaerat facere facilis hic! Soluta maiores unde suscipit aliquam nulla dignissimos sed exercitationem libero odio laborum. Molestias, dolor pariatur numquam porro quas animi soluta nostrum aliquid, sapiente fugit corrupti reiciendis saepe reprehenderit qui?</p>
            </div>
            <button className="btn btn-dark" onClick={toggleStyle}>{btntext}</button>
        </>
    )
}
