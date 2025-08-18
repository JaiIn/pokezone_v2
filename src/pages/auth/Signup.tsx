import React from 'react';

const Signup = () => {
    return (
        <div className='flex justify-center flex-col w-1/2'>
                <p>회원가입</p>
                <input placeholder='닉네임'/>
                <input placeholder='아이디'/>
                <input placeholder='이메일'/>
                <input 
                type='password'
                placeholder='비밀번호'/>
                <input 
                type='password'
                placeholder='비밀번호 확인'/>
                <button className='w-2'>회원가입</button>
        </div>
    );
};

export default Signup;