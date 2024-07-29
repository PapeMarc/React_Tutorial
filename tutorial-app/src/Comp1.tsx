//import App from "./App";

export default function Comp1(){
    const msg = "Some Message.";

    return (
        <div id="comp1div">
            <div id="msgdiv" style={{ fontSize: "40px", fontWeight: "bold", color: "lightgreen" }}>
                {msg}
            </div> 
            {/*Alles in Klammern ist script*/}
            <div>
                {/*Other terms.*/ 1+2 + Math.PI}
                <br/>
                <br/>
                <button onClick={() => {
                    alert("It clicked me!");
                }}>Click me!</button>
            </div>
        </div>
    );
};