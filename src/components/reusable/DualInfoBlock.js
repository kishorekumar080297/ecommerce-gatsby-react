import React from 'react'
import Heading from './Heading'
import logo from "../../images/heromain1.png"
import { Link } from "gatsby"

export default function DualInfoBlock({heading, img}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequatur aliquid saepe tempora eum quas molestias error nobis cupiditate eaque pariatur vitae aperiam, atque perspiciatis ut odio amet asperiores laudantium non. Officiis, quibusdam amet sunt, doloribus aliquam nemo aspernatur architecto deserunt repudiandae debitis facilis ipsam animi, sapiente magni vero obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam delectus eligendi exercitationem obcaecati porro iste consequatur, aperiam, nulla dicta quisquam, ex error ea expedita. Dolore laborum dolor cupiditate, qui nobis eius corrupti ab voluptate fugit vero iusto a odit commodi eum deserunt ipsum maxime architecto voluptates modi aliquid repellat similique quaerat. Odit corporis ullam atque neque error, ex deserunt nostrum. Deserunt incidunt, debitis, recusandae enim delectus voluptates accusamus maxime eum aliquid quas ea, ratione pariatur magni. Error obcaecati maxime sequi tenetur dolore dignissimos excepturi reprehenderit nesciunt autem ratione, dicta corporis vero quidem quia aliquid ea natus dolorum. Enim, laudantium?
                        </p>
                    </div>  
                    <div className="col-4">
                         <div className="card">
                            <img className="card-img-top" src={img} alt="Samsung Galaxy S10"/>
                            <div className="card-body">
                                <h5 className="card-title">Just Click Photos</h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint enim quibusdam illum eos, nam officia error, dignissimos, corporis libero a velit ipsum necessitatibus. Tempore beatae cumque alias? Dolorum, libero.
                                </p>
                                <Link to="/" className="btn btn-warning btn-block">{heading}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
