import React from "react"



function Input({text}){
	return(
	<div>
		<li>
		  <input type="text" placeholder={text} />
		</li>
	</div>
	)
}
export default Input