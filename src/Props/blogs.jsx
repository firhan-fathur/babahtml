import React,{Component} from 'react';
import '../styles/styles.css';

const Blogs = (props) => {
        return(
            <div className="blogswrap">
                <div className="contenatas">
                    <div className="gambarpaket">
                    <img src={props.img} className="imageblogs" alt="test"/>

                    </div>
                  <div className="post">
                    <p>{props.date}</p>
                    <h4>{props.heading}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non felis ex. In hac habitasse platea dictumst. Etiam aliquam non quam sed sodales. Sed vitae tristique erat, ac viverra nulla. Donec turpis nibh, vulputate ac purus in, consequat lobortis quam. Nam blandit libero sed leo faucibus lacinia. Maecenas in malesuada ipsum. Proin et ex eget est rhoncus suscipit. Etiam efficitur, odio sit amet varius sodales, sem nibh molestie ante, eget elementum odio lectus rutrum dolor. Mauris dapibus tortor erat, euismod efficitur odio dignissim at. Ut posuere risus nec metus convallis, nec ultrices mi venenatis. Sed diam magna, sollicitudin a tellus non, iaculis luctus velit. Donec pharetra libero at efficitur euismod.</p>
                  </div>
                </div>
                               
            </div>
        )

    }



export default Blogs;