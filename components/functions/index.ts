interface PostDataProps {
	username: string;
	email: string;
	password: string;
}

const PostData = async (values: PostDataProps, url: string) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const newTodo = await response.json();
		console.log(newTodo);
	} catch (error) {
		if (error instanceof Error) console.log(error.message);

		return [];
	}
};

export default PostData;
