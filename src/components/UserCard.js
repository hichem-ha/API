import { Card } from 'react-bootstrap' ;



const UserCard = ({ user }) => {
    return (
        <div className="card">
            <Card style={{ width: '20rem', margin: '20px' }}>
                
                <Card.Body>
                    <Card.Title>Name:{user.name}</Card.Title>
                    <Card.Text>
                        username: {user.username}
                        
                     
                    </Card.Text>
                    <Card.Text>
                    email: {user.email} 
                    </Card.Text>
                    <Card.Text>
                    phone: {user.phone}
                    </Card.Text>
                    <Card.Text>
                    company: {user.company.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard