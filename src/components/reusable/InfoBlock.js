//Created by Kishore Kumar Govindaradjou on 14th Aug 2019

import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-white text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut rem mollitia optio recusandae neque sit. Nulla possimus delectus sequi exercitationem eaque porro dicta asperiores odio, deserunt iure voluptatem provident! Deleniti voluptate animi vitae labore iusto odit non laboriosam, corporis odio reiciendis. Iusto est, nihil fugit mollitia, nostrum ut sed corrupti iure possimus dolorum officiis quas? Totam, id laborum cupiditate vero labore praesentium in consequuntur iste repellat quo veniam inventore impedit culpa ullam perspiciatis alias corrupti necessitatibus enim. Omnis labore quod laborum expedita, doloremque vitae dolorem natus aut quaerat eveniet mollitia aliquam fuga. Praesentium consectetur consequatur, rem inventore magnam excepturi iure odit quaerat voluptatum blanditiis veritatis numquam, debitis, velit hic a delectus facilis voluptatem cum. Deserunt fugiat fugit totam fuga soluta illo neque repellat at voluptate consectetur quibusdam perferendis nisi non, laudantium saepe aut facilis minima iure asperiores! Tempora pariatur eveniet sapiente expedita sequi consectetur. Eos dicta dolore, consequatur quaerat dolorum odio quo ab rem consectetur facere, distinctio fuga voluptas?
                        </p>
                        <Link to='/about/'>
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
