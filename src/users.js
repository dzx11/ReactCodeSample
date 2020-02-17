import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';

class Users extends React.Component {
    state = {
        users: [],
    }
     toUser = id => {
         this.props.history.push('/user/'+id);

    }
     toWork = id => {
         this.props.history.push('/work/'+id);
     }
    componentDidMount() {
        const url = '/api/users';
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                users:result.users,
            })
        })
    }
    render() {
        const { users }= this.state;
        const result = users.map((entry, index) => {
            return <tr key={ index } >
                <td style={ { verticalAlign:'middle' } } className = "pointer" align="center" onClick={ () => this.toUser(entry.screen_name) }>
                    <b className="text-muted">
                        {entry.name}
                    </b>
                </td>
                <td style={ { verticalAlign:'middle' } } className = "pointer" align="center" xs={ 1 } onClick={ () => this.toUser(entry.screen_name) }>
                    <Image style={ { width:'100%' } } thumbnail src={ entry.avatar }/>
                </td>

                <td style={ { verticalAlign:'middle' } }  onClick={ () => this.toUser(entry.screen_name) }  className="text-muted pointer"align="center">
                    {entry.profession}
                </td>

                {entry.works.map((answer,i) => {
                    return (<td style={ { verticalAlign:'middle' } } key={ i } onClick={ () => this.toWork(answer.id) }>
                        <Image className="pointer" fluid style={ { maxHeight:'161px' } } src={ answer.thumbnail }/>
                    </td>
                            )
                })}
            </tr>
        });
      return <div>
          <Container fluid="true" className="cont" >
              <Table hover striped >
                  <tbody>
                      {result}
                  </tbody>
              </Table>
          </Container>
      </div>

    }
}
export default Users
