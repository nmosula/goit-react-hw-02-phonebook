import PropTypes from 'prop-types';

const User = ({ item }) => {
    return (
        <li key={item.id}>
            {item.name}
        </li>
    );
};

export default User;

User.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};