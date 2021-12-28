
import Product from "../Producut/Product";
import "./Products.css"
const Products = ({ productAttr }) => (
    <section className="products">
        {productAttr.map((item) => (
            <Product key={item.id} title={item.title} image={item.image} price={item.price} />))}

    </section>)

export default Products;