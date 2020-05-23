import React from 'react';
import Gallery from 'react-grid-gallery';

function Projects() {

    const IMAGES =
        [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false
        },
        {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                isSelected: false
        },
        {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                isSelected: false
        }]

    return(
        <div className="row">
            <div className="col s12 m4 l3" style={{marginTop:'5vh', position:'fixed'}}>
                <div className="collection">
                    <div 
                        style={{color:"#55b9b0", cursor:'pointer'}}
                        href="#project1"
                        className="collection-item"
                    >
                        E-Canteen Project
                        <a href="#project1info" onClick={() => console.log('masuk info')}>
                            <i style={{marginTop:'0.5vh', marginLeft:'2vh'}} className="fas fa-info-circle right" />
                        </a>
                        <a href="#project1info" onClick={() => console.log('masuk sampah')}>
                            <i style={{marginTop:'0.5vh'}} className="fas fa-trash-alt right"></i>
                        </a>
                    </div>
                    <a 
                        href="#project2"
                        className="collection-item"
                    >
                        Project 2
                    </a>
                </div>
            </div>

            <div style={{marginLeft:'53vh'}}>
                <table id="skills">

                    <tbody style={{marginBottom:'10vh'}}>
                        <tr className="no-border">
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4 className="left">E-Canteen UNPAR</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Links:</h5>
                                                <ul>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://ekantin-unpar.com/" 
                                                            target="_blank"
                                                        >
                                                            https://ekantin-unpar.com/
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>In cooperation with: </h5>
                                                <ul>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://github.com/bobibs" 
                                                            target="_blank"
                                                        >
                                                            @bobibs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://github.com/smartoryu" 
                                                            target="_blank"
                                                        >
                                                            @smartoryu
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Details: </h5>
                                <p className="left">
                                    akjscnkajscn lorem..... aunschskajnckasn ipsum........sdv
                                    dsvlsdjv n
                                </p>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <h5>Images: </h5>
                                <Gallery 
                                    images={IMAGES}
                                    onSelectImage={(arrIndex) => console.log(arrIndex)}
                                />
                            </td>
                        </tr>
                    </tbody>

                    <tbody style={{marginBottom:'10vh'}}>
                        <tr className="no-border">
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4 className="left">Project 2</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Links:</h5>
                                                <ul>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://ekantin-unpar.com/" 
                                                            target="_blank"
                                                        >
                                                            https://ekantin-unpar.com/
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>In cooperation with: </h5>
                                                <ul>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://github.com/bobibs" 
                                                            target="_blank"
                                                        >
                                                            @bobibs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            style={{display: "table-cell"}} 
                                                            href="https://github.com/smartoryu" 
                                                            target="_blank"
                                                        >
                                                            @smartoryu
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Details: </h5>
                                <p className="left">
                                    akjscnkajscn lorem..... aunschskajnckasn ipsum........sdv
                                    dsvlsdjv n
                                </p>
                            </td>
                        </tr>
                        <tr className="no-border">
                            <td>
                                <h5>Images: </h5>
                                <Gallery 
                                    images={IMAGES}
                                    onSelectImage={(arrIndex) => console.log(arrIndex)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <a style={{width:'100%'}} className="waves-effect waves-light btn">Add a Project</a>
            </div>
        </div>
    )
}

export default Projects