import React, {Component} from 'react';
import {useHistory, Prompt} from 'react-router-dom';

const History = () =>  {
    
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    const handleGoHome = () => {
        history.push('/');
    }
    

    return (
            <div>
                <button onClick={handleGoBack}>뒤로</button>
                <button onClick={handleGoHome}>홈으로</button>
                <Prompt
                    when={true}
                    message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                    }
                />
            </div>
            
        )
    }

export default History;