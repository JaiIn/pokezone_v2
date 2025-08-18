import React from 'react';

const Login = () => {
    return (
        <div>
            <div>포켓몬 월드에 어서오세요!</div>
            <input
            placeholder='아이디'/>
            <input
            type='password'
            placeholder='비밀번호'/>
            <div className='flex justify-center'>
                <button>로그인</button>
                <p>혹시 계정이 없으신가요?</p>
                <button>회원가입</button>
            </div>
        </div>
    );
};

export default Login;