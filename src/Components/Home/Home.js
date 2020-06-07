import React from 'react';
import './Home.scss'

const Home = () => {
    return (
        <div class="container elems">
            <div class="row d-flex flex-row">
                <div class="col-3">
                    <h4 class="text-center">Where do you want to go?</h4>
                </div>
                <div class="col-8">
                    <div className='row d-flex flex-row-reverse align-items-right'>
                        <div className='col-md-6'>
                            <div class="card" style={{width: '18rem'}}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                            <div class="card" style={{width: '18rem'}}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div class="card" style={{width: '18rem'}}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                            <div class="card" style={{width: '18rem'}}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Home;