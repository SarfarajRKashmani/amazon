export const userdata={
    post: async(data)=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    get:async()=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/users`);
        let res = await req.json();
        return res;
    },
    patch: async(id,data)=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/users${id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body:json.stringify(data)
        });
    },
    delete: async(id)=>{
        let req = await fetch(`https://json-server-deployment-mxgi.onrender.com/users${id}`,{
            method: 'DELETE'
        });
    }
  }