import { db } from "../firebaseConfig"
import { getDocs, collection, QuerySnapshot, DocumentSnapshot } from "firebase/firestore"

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const productsRef = collection(db, "products")
        
        getDocs(productsRef)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(documentSnapshot => {
                    const fields = documentSnapshot.data()

                    return {
                        id: documentSnapshot.id,
                        ...fields
                    }
                })
                resolve(productsAdapted)
                console.log(productsAdapted)
            })
            .catch(error =>{
                reject(error)
            })
    })
}
