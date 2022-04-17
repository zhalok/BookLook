export default function BookDetail() {
	return <div></div>;
}

export async function getServerSideProps(context) {
	const { id } = context.query;
	const mysqlClient = require('../../../utils/database_connection');

	return {
		props: {},
	};
}
