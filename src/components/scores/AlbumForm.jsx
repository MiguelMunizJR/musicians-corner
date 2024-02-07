const AlbumForm = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const modal = document.getElementById("crud-modal");

		const formData = new FormData(e.target);
		const name = formData.get("name");
		const description = formData.get("description");

		console.log(name, description);
		modal.classList.add("hidden");
		e.target.reset();
	};

	return (
		<section
			id="crud-modal"
			aria-hidden="true"
			className="hidden bg-black/15 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full transition-all"
		>
			<div className="relative p-6 w-full max-w-md max-h-full">
				<div className="relative bg-[#212636] rounded-lg">
					<header className="flex items-center justify-between p-4">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Crear albúm
						</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-toggle="crud-modal"
						>
							<svg
								className="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</header>
					<form className="p-4" onSubmit={handleSubmit}>
						<div className="grid gap-6 mb-4 grid-cols-2">
							<div className="col-span-2">
								<label
									htmlFor="name"
									className="mb-2 text-sm font-medium text-white"
								>
                  Nombre
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-500/20 text-gray-300 text-sm rounded focus:ring-primary-600 w-full p-2 hover:bg-gray-500/20 outline-none"
									placeholder="Nombre del albúm"
									required
								/>
							</div>
							<div className="col-span-2">
								<label
									htmlFor="description"
									className="mb-2 text-sm font-medium text-gray-200"
								>
                  Descripción
								</label>
								<textarea
									id="description"
									name="description"
									rows={4}
									className="bg-gray-500/20 text-gray-300 text-sm rounded w-full p-2 hover:bg-gray-500/20 outline-none"
									placeholder="Agrega una descripción"
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="mt-4 text-white inline-flex items-center bg-[#1e8530] hover:bg-[#249938] font-medium rounded text-sm px-5 py-2 text-center transition-all"
						>
							<svg
								className="me-1 -ms-1 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
									clipRule="evenodd"
								></path>
							</svg>
              Crear nuevo albúm
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AlbumForm;
