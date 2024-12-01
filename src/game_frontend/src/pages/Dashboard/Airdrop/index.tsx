import Incentives from '../../../components/dashboard/airdrop/Incentives'
import AirdropTab from '../../../components/dashboard/airdrop/Tab'
import './index.css'

const Airdrop=()=>{
    return(
        <main className='main-container'>
            <section className='main-header'>
                <h2 className='page-title'>We did it!</h2>
                <div className='ufo-container'>
                    <img src="/assets/images/ufo-bg.svg" alt="ufo" loading='lazy' width={100} height={100} />
                </div>
                <p>token is on the market</p>
            </section>
            <section className='airdrop-body'>
                <AirdropTab/>
                {/* <div className='spacer'></div> */}
                <Incentives/>
            </section>
        </main>
    )
}
export default Airdrop