import {
	DialogTrigger,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogDescription,
	DialogTitle,
	DialogFooter,
} from "../ModalDialog";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../SelectDropDown";

export const UploadMusic = ({ className }) => {
	return (
		<svg
			className={`${className}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<g fill="#fff">
				<path
					fillRule="evenodd"
					d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z"
					clipRule="evenodd"
				></path>
				<path d="M12.25 15a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"></path>
				<path
					fillRule="evenodd"
					d="M15.75 21.273A9.971 9.971 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-.547 3.27L19.59 13.41a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827v1.537ZM13 6.25a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7a.75.75 0 0 1 .75-.75Z"
					clipRule="evenodd"
				></path>
			</g>
		</svg>
	);
};

const ScoresForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData(e.target);
		const name = data.get("name");
		const artist = data.get("artist") || "not artist";
		const category = data.get("category");
		const file = data.get("dropzone");

		console.log({ name, artist, category, file });
		e.target.reset();
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<button className="bg-[#26ab3c] hover:bg-[#2cb643] rounded w-52 h-12 flex items-center justify-center">
					<UploadMusic className="w-6 mr-[3px]" />
          Subir partitura
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-[#1A1E2C] border-0">
				<DialogHeader>
					<DialogTitle className="font-medium text-xl">
            Subir partitura
					</DialogTitle>
					<DialogDescription className="text-gray-400/60">
            Sube una partitura para que otros usuarios puedan verla, guardarla y
            descargarla.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="w-full py-6">
						<div className="flex items-center justify-center w-full">
							<label
								for="dropzone"
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold text-pretty">Haz click aquí para subir</span> o arrastra y suelta tu archivo.
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG (MAX. 800x400px)
									</p>
								</div>
								<input id="dropzone" name="dropzone" type="file" className="hidden" required />
							</label>
						</div>
					</div>
					<div className="flex flex-col items-end gap-4 py-6 text-[15px] font-normal text-gray-400">
						<div className="flex items-center gap-3">
							<label htmlFor="name" className="text-right">
                Nombre
							</label>
							<input
								id="name"
								name="name"
								placeholder="Nombre de la partitura"
								className="w-72 bg-[#23293a] active:bg-[#282e41] hover:bg-[#282e41] outline-none transition-all rounded-sm p-1 px-2 text-gray-300 text-[14px]"
								required
							/>
						</div>
						<div className="flex items-center gap-3">
							<label htmlFor="artist" className="text-right">
                Artista
							</label>
							<input
								id="artist"
								name="artist"
								placeholder="Artista de la partitura (opcional)"
								className="w-72 bg-[#23293a] active:bg-[#282e41] hover:bg-[#282e41] outline-none transition-all rounded-sm p-1 px-2 text-gray-300 text-[14px]"
							/>
						</div>
						<div className="flex items-center self-start ml-4 mt-2 gap-3">
							<label htmlFor="category">Categoria</label>
							<Select name="category" defaultValue="banda">
								<SelectTrigger className="outline-none border-gray-300/40">
									<SelectValue placeholder="Escoge una categoria" />
								</SelectTrigger>
								<SelectContent className="bg-[#1A1E2C] border-gray-300/40">
									<SelectGroup>
										<SelectItem className="hover:bg-[#282E41]" value="todos">
                      Todas
										</SelectItem>
										<SelectItem className="hover:bg-[#282E41]" value="banda">
                      Banda
										</SelectItem>
										<SelectItem className="hover:bg-[#282E41]" value="mariachi">
                      Mariachi
										</SelectItem>
										<SelectItem className="hover:bg-[#282E41]" value="sonora">
                      Sonora
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter className="mt-4">
						<button
							type="submit"
							className="flex items-center justify-center gap-1 bg-[#26ab3c] hover:bg-[#2cb643] transition-all text-[15px] rounded cursor-pointer py-2 px-5"
						>
							<UploadMusic className="w-5" />
              Subir partitura
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default ScoresForm;