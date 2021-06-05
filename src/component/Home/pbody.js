import Product from './product'
import './pbody.css'
const Pbody= ()=>{
    let pdetail=[{company:"samsung",src:"https://images-eu.ssl-images-amazon.com/images/I/31qC5aShOLL._AC_SX184_.jpg",price:20000,des:"Whirlpool 190 L 3 Star Direct-Cool Single Door Fridge",star:"3"},
    {company:"Mi",src:"https://m.media-amazon.com/images/I/61QLVYZGyFS._AC_UY218_.jpg",price:14499,des:"Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)",star:"4"},
    {company:"IFB",src:"https://images-na.ssl-images-amazon.com/images/I/51Shm3wmZnL._SX466_.jpg",price:37990,des:"IFB 1.5 Ton 3 Star Twin Inverter Split Fastcool Gold Series AC",star:"4"},
    {company:"Sennheiser",src:"https://m.media-amazon.com/images/I/71zPb+U1ybL._AC_UY218_.jpg",price:14990,des:"Sennheiser HD 458 BT Over Ear Wireless Headphones",star:"4"},
    {company:"Fusion",src:"https://m.media-amazon.com/images/I/51N3dTg2M0L._AC_UL320_.jpg",price:699,des:"Cloth Fusion Microfiber Cushion Filler, 16X16 Inches, White, Set of 5",star:"3"},
    {company:"BULLMER",src:"https://m.media-amazon.com/images/I/61MAa4IqC-L._AC_UL320_.jpg",price:689,des:"Mens Printed Hooded & Round Neck Cotton Tshirt - Pack of 2",star:"3"},
    {company:"Sketchers",src:"https://m.media-amazon.com/images/I/81-NgMluzLL._AC_UL320_.jpg",price:4500,des:"Men's Go Run Fast-Quake Shoes",star:"5"},
    {company:"ALAMOS",src:"https://m.media-amazon.com/images/I/61G6HqHEpZL._AC_UL320_.jpg",price:249,des:"edixo cap",star:"3"},
    {company:"by Jeffe Keller",src:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg",price:161,des:"Attitude Is Everything: Change Your Attitude ... Change Your Life!",star:"5"}];
  
    return(
       <div id="products">
          {
              pdetail.map((item,index)=><Product key={index} pdetail={item}/>)
          }
       </div>
    );
}
export default Pbody;