function User({ id, name, username, email, }) {
 
  return (
      <div style={{ border: `2px solid black` }}>
        <div>{id}</div>
        <div>{name?.toUpperCase()}</div>
        <div>{username}</div>
        <div>{email}</div>
      </div>
    );
  }
export default User;