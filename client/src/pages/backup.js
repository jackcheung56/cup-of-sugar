// function Browse() {

//     const [item, setItem] = useState([])
//     const history = useHistory();
    

//     const getAllItems = async () => {
//         try {
//             const data = await __GetItems()
//             console.log('Browse Page', data)
//             setItem(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getAllItems()
//     }, [])


    
//     return (
//         <div>
//             <h1>browse all items</h1>
//             <div className="itemList">
//                 {item.map((item) => (
//                     <ItemCard
//                         //model attributes go here
//                         item={item}
//                         key={item._id}
//                         title={item.title}
//                         onClick={() => history.push(`/items/${item.id}`)}
                        

//                         //model attributes end here
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Browse;