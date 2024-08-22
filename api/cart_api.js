export const cart_api={
    post: async(data)=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/cart`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    get:async()=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/cart`);
        let res = await req.json();
        return await res;
    },
    patch: async(id,data)=>{

        console.log("ele,id",id,data);
        
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/cart/${id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body:JSON.stringify(data)
        });
    },
    delete: async(id)=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/cart/${id}`,{
            method: 'DELETE'
        });
    }
  }