import User from 'components/User';
import PropTypes from 'prop-types';

const UserList = ({ items }) => {

    return (
        <>
            <p>Contacts</p>
            <ul>
                {items.map(item => (
                    <User key={item.id} item={item} />
                ))}
            </ul>
        </>
  );
};

UserList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
