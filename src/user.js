import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-component';

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            profile:{},
            works:[],
        };
        this.MasonryRef = React.createRef();
    }
     toUserS = () => {
         this.props.history.push('/users/');

    }
     toWork = id => {
         this.props.history.push('/work/'+id);
     }

    componentDidMount() {
        const id = this.props.match.params.id;
        const url = '/api/users/'+id+'/profile';
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                profile:result.profile,
            })

        });
            const url2 = '/api/users/'+id+'/works';
            fetch(url2)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    works:result.works,
                })
            });

    }
  render() {
      const { profile,works }= this.state;
      const wks = works.map((entry, index) => {
            return <div className='grid-item' key={ index } onClick={ () => this.toWork(entry.id) }>
                <Image className="pointer" src={ entry.thumbnail }/>
            </div>
                });
      const about = <div >
          <Row><Col align="center" style ={ { marginBottom:'20px' } } > <Image src={ profile.avatar&&profile.avatar.thumb2x }/></Col></Row>
          <Row><Col align="center"> <h1 > {profile.name} </h1></Col></Row>
          <Row><Col align="center"> <h4 className="text-muted">  {profile.profession}</h4> </Col></Row>
          {profile.location ? (<Row><Col align="center"> <p className="text-muted"> {profile.location}</p></Col></Row>) : null}
          {profile.website ? (<Row><Col align="center"> <a href={ profile.website }> <b className="text-muted"> {profile.website} </b> </a></Col></Row>) : null}
          {profile.contact_email ? (<Row><Col align="center"> <a href={ 'mailto:'+profile.contact_email }> <b className="text-muted"> {profile.contact_email} </b> </a></Col></Row>) : null}
          <Row>
              {profile.instagram_url ? (<Col align="center"> <a href={ profile.instagram_url }> <b className="text-muted"> Instagram </b></a></Col>
                                             ) : null}
              {profile.facebook_url ? (<Col align="center"> <a href={ profile.facebook_url }> <b className="text-muted"> Facebook </b> </a></Col>) : null}
              {profile.twitter_url_url ? (<Col align="center"> <a href={ profile.twitter_url }> <b className="text-muted"> Twitter </b> </a></Col>) : null}
          </Row>

          <Row><Col align="center"> <p className="text-muted"> {profile.bio}</p></Col></Row>
      </div>
      return<div>

          <Container className="cont" fluid="true"  >
              {about}

              <Masonry
                className={ '.grid' } // default ''
                elementType={ 'div' } // default 'div'
                disableImagesLoaded={ false } // default false
                updateOnEachImageLoad={ false } // default false and works only if disableImagesLoaded is false
                                             >
                  <div className="grid-sizer">
                      {wks}
                  </div>
              </Masonry>

          </Container>
      </div>
  }
}
export default User
