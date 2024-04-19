import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [keyword, setKeyword] = useState("");

	const instagramFollowers = [
		{ id: 1, username: "adventure_alex", followers: 3402, verified: false },
		{ id: 2, username: "baking_beth", followers: 7890, verified: true },
		{ id: 3, username: "coder_chris", followers: 1522, verified: false },
		{ id: 4, username: "dancer_dan", followers: 5000, verified: false },
		{ id: 5, username: "eco_emily", followers: 9298, verified: true },
	];

	let filteredInstagramFollowers = instagramFollowers.filter((follower) =>
		follower.username.toLowerCase().includes(keyword.toLowerCase())
	);

	return (
		<>
			<div className="container">
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Search by username"
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</div>
				<div className="row">
					{filteredInstagramFollowers.map((user) => (
						<div
							key={user.id}
							className="col-sm-12 col-md-6 col-lg-4"
						>
							<div
								className="card"
								style={{ width: "18rem", margin: "10px" }}
							>
								<div className="card-body">
									<h5 className="card-title">
										{user.username}
									</h5>
									<p className="card-text">
										Followers: {user.followers}
									</p>
									<p className="card-text">
										{user.verified
											? "Verified"
											: "Not Verified"}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
