import {
	DialogTrigger,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogDescription,
	DialogTitle,
	DialogFooter
} from "../ModalDialog";
import { useState } from "react";

const AlbumForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData(e.target);
		const title = data.get("title");
		const description = data.get("description") || "not description";

		console.log({ title, description });
		e.target.reset();
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen} >
			<DialogTrigger asChild>
				<button className="w-36 h-36 flex justify-center items-center rounded-lg relative bg-[#26ab3c] hover:bg-[#2cb643] cursor-pointer transition-all">
					<svg
						className="w-16"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							fillRule="evenodd"
							d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-13a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-[#1A1E2C] border-0">
				<DialogHeader>
					<DialogTitle className="font-medium text-xl">Crear albúm</DialogTitle>
					<DialogDescription className="text-gray-400/60">
            Crea un nuevo albúm para mantener tus partituras organizadas.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-6 text-base font-normal text-gray-300">
						<div className="grid grid-cols-4 items-center gap-4">
							<label htmlFor="title" className="text-right">
                Titulo
							</label>
							<input
								id="title"
								name="title"
								placeholder="Titulo del albúm"
								className="col-span-3 bg-[#23293a] active:bg-[#282e41] hover:bg-[#282e41] outline-none transition-all rounded-sm p-1 px-2 text-gray-300 text-[14px]"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<label htmlFor="description" className="text-right">
                Descripción
							</label>
							<input
								id="description"
								name="description"
								placeholder="Alguna descripción (opcional)"
								className="col-span-3 bg-[#23293a] active:bg-[#282e41] hover:bg-[#282e41] outline-none transition-all rounded-sm p-1 px-2 text-gray-300 text-[14px]"
							/>
						</div>
					</div>
					<DialogFooter className="mt-4">
						<button
							type="submit"
							className="bg-[#26ab3c] hover:bg-[#2cb643] transition-all py-2 px-3 text-[15px] rounded cursor-pointer"
						>
                Crear albúm
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AlbumForm;
