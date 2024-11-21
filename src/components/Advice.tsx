import dividerMobile from '../../images/pattern-divider-mobile.svg'
import dividerDesktop from '../../images/pattern-divider-desktop.svg'
import dice from '../../images/icon-dice.svg'
import { useEffect, useState } from 'react'

type AdviceType = {
    id:number,
    advice:String
}

const Advice = () => {

    const [advice, setAdvice] = useState<AdviceType | null>(null)
    
    const fetchAdvice = async () => {
        try{
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json()
            setAdvice(data.slip)
        }
        catch(error){
            console.error(error)
        }
        
    }

    useEffect(() => {
        fetchAdvice()
    }, []) 



  return (
    <div className="card">
        <p>advice #{advice?.id}</p>
        <h2>{advice?.advice}</h2>
        <img src={dividerDesktop} className='dividerDesktop'></img>
        <img src={dividerMobile} className='dividerMobile'></img>
        <div className='dice' onClick={fetchAdvice}>
            <img src={dice}></img>
        </div>
    </div>
  )
}

export default Advice