import React from "react";
import { ListaMenu } from "./listamenu.jsx";
import  ItemMenu  from "./itemMenu.jsx";
import '../Menu/menu.css'



export function Menu (){

    return(

        <div className="Menu">
            <h1 className="MenuTitulo">Nuestro Menu</h1>
            <div className="ListaMenu">
                {ListaMenu.map((menuItem,key)=>{
                    return (
                    <ItemMenu 
                        key={key}
                        image={menuItem.image} 
                        name={menuItem.name} 
                        price={menuItem.price} 
                    />
                    );
                })} 
            </div>
        </div>
    );


}