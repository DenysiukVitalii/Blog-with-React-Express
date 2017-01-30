import React, { Component } from 'react';
import './grid.scss';
import './post.scss';

var DATA_POSTS = [
          {
            id: 1,
            header: 'Как с помощью SEO зарабатывать бизнесу деньги',
            image: 'http://ain.ua/wp-content/uploads/2017/01/PR-4-300x190.png',
          },
          {
            id: 2,
            header: 'Устройство, добавляющее 7 портов новому MacBook Pro, собрало на Kickstarter $1,7 млн вместо $100 000',
                image: 'http://ain.ua/wp-content/uploads/2017/01/hyperdrive-300x190.jpg',
          },
          {
            id: 3,
            header: 'WSJ впервые раскрыл финансовые показатели SpaceX Илона Маска',
              image: 'http://ain.ua/wp-content/uploads/2017/01/31467130724_3e1ec5bfa8_c-300x190.jpg',
          },
          {
           id: 4,
            header: 'WSJ впервые раскрыл финансовые показатели SpaceX Илона Маска',
            image: 'http://ain.ua/wp-content/uploads/2017/01/31467130724_3e1ec5bfa8_c-300x190.jpg',
          }
   ];

   class Post extends Component {

     render() {
           return (

               <div className="gitem-lg-2 post">
                <div className="post">
                   <div className="grid">
                     <div className="gitem-lg-12">
                       <img src={this.props.image} className="imgPost" alt=""/>
                     </div>
                     <a className="post-text">{this.props.header}</a>
                   </div>
                </div>
               </div>

           );
     }
   }



class Posts extends Component {
  constructor(props) {
    super(props);
    this.data_posts = DATA_POSTS;
  }

  render() {
    return (
      <section>
        <div className="grid container">
          <div className="gitem-lg-9">
          <div className="grid">
                  {
                    this.data_posts.map(function(el) {
                      return <Post
                          key={el.id}
                          header={el.header}
                          image={el.image}
                      />
                    })
                  }
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
