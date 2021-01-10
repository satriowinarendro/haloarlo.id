interface ButtonProps{
    text: string,
    onClick?: () => any,
}

export default function Button({text, onClick}: ButtonProps){
    return (
        <div className="button" onClick={onClick}>
            {text}
            <style jsx>{`
                .button{
                     display:inline-block;
                     padding:0.35em 1.2em;
                     border:0.1em solid #9b9b9b;
                     margin:0.275em 0 0.275em 0;
                     border-radius:0.12em;
                     box-sizing: border-box;
                     text-decoration:none;
                     font-family:'Roboto',sans-serif;
                     font-weight:300;
                     color:#9b9b9b;
                     text-align:center;
                     transition: all 0.2s;
                     cursor: pointer;
                }
                .button:hover{
                     color:#000000;
                     background-color:#FFFFFF;
                }
                @media all and (max-width:30em){
                    .button{
                      display:block;
                      margin:0.4em auto;
                     }
                }
            `}</style>
        </div>
    )
}