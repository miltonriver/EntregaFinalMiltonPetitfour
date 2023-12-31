import classes from "./ItemList.module.css"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className={classes.listaItems} /* style={{display:"flex"}} */>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList