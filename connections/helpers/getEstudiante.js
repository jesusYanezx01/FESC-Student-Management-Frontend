
const API="https://cff09838-83fe-4332-a9d5-02292b85221e.mock.pstmn.io/detalleestudiante"



export default async (id)=>{


    const apiUrl=(id) ? `${API}${id}` : API



    try{

        const response= await fetch(apiUrl)

        const data= await response.json()

        return data

        
    }
     catch(error){ 
        console.log("error Fetch");

        console.log(error.name);

        console.log(error.message);
        

    }

}