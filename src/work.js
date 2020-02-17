import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Masonry from 'react-masonry-component';

class Works extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            work:{},
        };
    }
     toUsers = () => {
         this.props.history.push('/users/');
    }
     toUser = id => {
         this.props.history.push('/user/'+id);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const url = '/api/works/'+id;
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                work:result.work,
            })
        });
    }

  render() {
      const { work } = this.state;
      const wkImages = work.images && work.images.map((entry, index) => {
            return <div className="grid-item" key={ index }>
                <Image src={ entry.urls.detail }/>
            </div>
                });
      const result = <div>
          {!work.images ? (<Row>
              <Col><Image thumbnail align="center"  src={ work.thumbnail }/></Col>
          </Row>
                ) : null}

          <Row>
              <Col><h1 align="center" >{work.title}</h1></Col>
          </Row>

          {work.author ? (
              <Row>
                  <Col><p align="center" className="text-muted" >By <span  onClick={ () => this.toUser(work.author.screen_name) } className="text-muted pointer">{work.author&&work.author.profile.name} <Image thumbnail style={ { marginLeft:'10px' } } src={ work.author&&work.author.profile.avatar.thumb }/> </span></p></Col>
              </Row>
            ) : null }
          <Row>
              <Col ></Col>
          </Row>
          <Row>
              <Col><p align="center" className="text-muted">{work.description}</p></Col>
          </Row>
      </div>
      return <div>
          <Container  className="cont" fluid="true">
              {result}

              <Masonry
                className={ '.grid' } // default ''
                elementType={ 'div' } // default 'div'
                disableImagesLoaded={ false } // default false
                updateOnEachImageLoad={ false } // default false and works only if disableImagesLoaded is false
                >
                  <div className="grid-sizer">
                      {wkImages}
                  </div>
              </Masonry>
          </Container>
      </div>
  }
}
export default Works
