import { useEffect, useState } from "react"

function ContFruits() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count.toString()
    }, [count])
    
    return (
        <div>
            <div onClick={() => setCount(count + 1)}>Clique para adicionar uma fruta</div>
            <h3>Contagem</h3>
            <div>
                {count}
            </div>
        </div>
    )
}

export default ContFruits