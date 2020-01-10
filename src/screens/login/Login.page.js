import React, { useCallback, useState } from 'react'
import './style.scss'
import bgimage from './backgroundimg.jpg'

import InputField from '../../components/textinput.field'
import Actionbutton from '../../components/action.button'

//source: https://dribbble.com/shots/8504284-Pomah-Rent-House-Register-Page

const Loginpage = () => {


    const [changeview, setChangeview] = useState(false);


    const handleClick = useCallback(() => {
        // dispatch(() => {
        console.log('Working as it should')
        //})

        setChangeview(changeview => (!changeview))
    })


    return (
        <div className='login'>
            <div className='form-holder'>
                <h2 className='form-title'>Register to Baseone</h2>
                <p className='title-description'>Join Baseone hotel reservations to be able to lease you hotel rooms for best rates</p>

                <div className='auth-tabs'>
                    <div className='auth-tabs-buttons'>
                        <div className='button-a'>
                            <button>Register</button>
                            {
                                changeview ? <hr className='regdivider' /> : null
                            }

                        </div>
                        <div className='button-b'>
                            <button onClick={handleClick}>Login</button>
                            {
                                changeview ? <hr className='logdivider' /> : null
                            }

                        </div>
                    </div>
                    <hr className='divider' />
                </div>

                {
                    changeview ? <div className='login-tab'>

                        <InputField labeltitle={'Email'} placeholder={'jamex@xyz.com'} type={'email'} />
                        <InputField labeltitle={'Password'} placeholder={'******'} type={'password'} />
                        <Actionbutton title={'Login'} />
                    </div> : <div className='login-tab'>
                            <InputField labeltitle={'Name'} placeholder={'paul aron'} type={'text'} />
                            <InputField labeltitle={'Email'} placeholder={'jamex@xyz.com'} type={'email'} />
                            <InputField labeltitle={'Password'} placeholder={'******'} type={'password'} />
                            <Actionbutton title={'Register'} />
                        </div>
                }



            </div>

            <div className='image-holder'>
                <img src={bgimage} className='loginimage' />
            </div>


        </div>
    )
}
export default Loginpage
