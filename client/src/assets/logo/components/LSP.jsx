const SvgLSP = ({ title, titleId, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 103 32"
		fill="none"
		aria-labelledby={titleId}
		{...props}>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#logo-lsp-polimdo_svg__a)">
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M5.858 30.087c-1.007-1.492-1.94-3.035-2.734-4.652a31.195 31.195 0 0 1-.773-1.697 28.113 28.113 0 0 1-1.603-5.21c-.43-2.091-.639-4.221-.73-6.352L0 11.748l.245-.352A26.371 26.371 0 0 1 3.203 7.89a30.66 30.66 0 0 1 3.706-3.164A32.387 32.387 0 0 1 8.444 3.68c1.143-.734 2.33-1.4 3.548-1.998A35.442 35.442 0 0 1 15.57.156l.43-.156.432.156c1.22.441 2.413.953 3.576 1.525a35.851 35.851 0 0 1 3.549 1.998c.521.334 1.033.683 1.534 1.046a30.658 30.658 0 0 1 3.707 3.164 26.372 26.372 0 0 1 2.957 3.507l.246.352-.019.428c-.09 2.13-.3 4.26-.729 6.351-.366 1.785-.9 3.53-1.604 5.211-.24.574-.499 1.14-.773 1.697-.794 1.617-1.726 3.16-2.733 4.652l-.272.402-.47.118C22.32 31.381 19.187 32 16 32c-3.188 0-6.322-.619-9.4-1.393l-.471-.118-.271-.402Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M6.346 29.757c-.993-1.471-1.91-2.987-2.693-4.582a30.6 30.6 0 0 1-.758-1.665 27.499 27.499 0 0 1-1.57-5.101c-.423-2.06-.628-4.16-.718-6.258l-.01-.23.132-.188A25.79 25.79 0 0 1 3.62 8.305a30.09 30.09 0 0 1 3.635-3.103c.493-.357.995-.7 1.507-1.028a35.242 35.242 0 0 1 3.49-1.965A34.856 34.856 0 0 1 15.77.71L16 .627l.23.083c1.2.433 2.373.937 3.517 1.5a35.255 35.255 0 0 1 3.49 1.964c.512.329 1.015.671 1.508 1.028 1.29.936 2.51 1.974 3.635 3.103a25.784 25.784 0 0 1 2.891 3.428l.132.189-.01.229c-.09 2.099-.295 4.198-.718 6.258-.359 1.75-.88 3.454-1.57 5.101a30.6 30.6 0 0 1-.758 1.665c-.783 1.595-1.7 3.11-2.693 4.582l-.146.215-.252.064c-3.031.762-6.117 1.375-9.256 1.375-3.139 0-6.225-.613-9.256-1.375l-.252-.064-.146-.215Z"
				clipRule="evenodd"
			/>
			<path
				fill="#29176D"
				fillRule="evenodd"
				stroke="#231F20"
				strokeMiterlimit={2.61}
				strokeWidth={0.016}
				d="m16 10.667-4.055 3.277c.63-.288 1.386-.737 1.843 0h.806v1.6h2.812v-1.6h.806c.457-.737 1.212-.288 1.843 0L16 10.666Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M16 11.763a.838.838 0 1 1 0 1.676.838.838 0 0 1 0-1.676Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M14.686 18.512c.002.079.006.158.02.235a.81.81 0 0 0 .038.152.443.443 0 0 0 .245.263c.227.104.557.092.798.066l.297-.033v.998l-.245.02c-.69.06-1.588-.335-2.165-.681-.93-.558-1.994-1.41-3.133-1.41-.992 0-1.75.63-2.448 1.263l-.448.406v-.604c0-.63.174-1.22.495-1.759.703-1.177 2.096-2.05 3.39-2.436.744-.222 1.643-.326 2.35.068.474.265.801.738.83 1.286v.009l-.024 2.157Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFF200"
				fillRule="evenodd"
				d="M15.816 19.494v.453c-.42.036-1.166-.142-2.004-.645-.902-.54-2.038-1.448-3.27-1.448-1.039 0-1.817.596-2.63 1.333 0-2.14 2.183-3.488 3.695-3.938 1.973-.588 2.796.34 2.835 1.111l-.024 2.153c.01.508.14 1.119 1.398.981Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M12.288 19.426a2.452 2.452 0 0 0-.502.166c-.206.091-.7.362-.798.575-.183.397.18.842.44 1.106.52.529 1.09.991 1.671 1.45.418.33.838.657 1.241 1.004.436.376.849.772 1.23 1.205l1.2 1.366-1.544-.962a15.408 15.408 0 0 0-1.768-.949 20.738 20.738 0 0 0-1.688-.672c-.652-.231-1.31-.443-1.964-.668l-.006-.003-.007-.002c-.651-.264-1.295-.653-1.716-1.23a2.294 2.294 0 0 1-.45-1.54c.016-.225.064-.448.139-.662l.006-.017.007-.015c.431-.856 1.12-1.289 2.054-1.39l.006-.001h.006c.936-.057 1.764.248 2.538.753l.521.34-.616.146Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFF200"
				fillRule="evenodd"
				d="M9.862 18.454c.994-.062 1.784.319 2.373.71-.607.122-1.341.565-1.49.89-.183.398-.038.868.492 1.407 1.33 1.35 2.8 2.133 4.13 3.648-1.958-1.221-3.582-1.662-5.473-2.316-1.871-.756-2.249-2.02-1.875-3.095.504-1.001 1.325-1.188 1.843-1.244Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M17.314 18.512a1.64 1.64 0 0 1-.02.235.818.818 0 0 1-.038.152.443.443 0 0 1-.245.263c-.227.104-.557.092-.798.066l-.298-.033v.998l.246.02c.69.06 1.588-.335 2.165-.681.93-.558 1.994-1.41 3.133-1.41.992 0 1.75.63 2.448 1.263l.448.406v-.604c0-.63-.174-1.22-.495-1.759-.703-1.177-2.096-2.05-3.39-2.436-.744-.222-1.643-.326-2.35.068-.474.265-.802.738-.83 1.286v.009l.024 2.157Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFF200"
				fillRule="evenodd"
				d="M16.184 19.494v.453c.42.036 1.166-.142 2.004-.645.902-.54 2.038-1.448 3.27-1.448 1.039 0 1.817.596 2.63 1.333 0-2.14-2.183-3.488-3.694-3.938-1.974-.588-2.797.34-2.836 1.111l.024 2.153c-.01.508-.14 1.119-1.398.981Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M19.712 19.426c.171.035.342.095.502.166.206.091.7.362.798.575.183.397-.18.842-.44 1.106-.52.529-1.09.991-1.671 1.45-.418.33-.838.657-1.241 1.004a12.39 12.39 0 0 0-1.23 1.205l-1.2 1.366 1.544-.962c.569-.355 1.157-.67 1.767-.949.553-.252 1.117-.47 1.69-.672.651-.231 1.31-.443 1.963-.668l.006-.003.007-.002c.651-.264 1.295-.653 1.715-1.23.331-.452.49-.978.45-1.54a2.578 2.578 0 0 0-.138-.662l-.006-.017-.008-.015c-.43-.856-1.12-1.289-2.053-1.39l-.006-.001h-.006c-.936-.057-1.765.248-2.538.753l-.521.34.616.146Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFF200"
				fillRule="evenodd"
				d="M22.138 18.454c-.994-.062-1.784.319-2.373.71.607.122 1.341.565 1.49.89.183.398.038.868-.492 1.407-1.33 1.35-2.8 2.133-4.13 3.648 1.958-1.221 3.582-1.662 5.473-2.316 1.871-.756 2.249-2.02 1.875-3.095-.504-1.001-1.325-1.188-1.843-1.244Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="m16 15.122.07-.687 1.996-1.902 1.358 1.068-.48.154c-.751.24-1.24 1.087-1.378 1.826-.081.431-.055.893-.028 1.329.03.5.068 1 .015 1.5-.083.785-.76 1.02-1.464 1.02h-.179c-.704 0-1.38-.235-1.463-1.02-.053-.5-.016-1 .015-1.5.027-.436.053-.898-.028-1.33-.138-.738-.627-1.585-1.378-1.825l-.48-.154 1.357-1.068 1.997 1.902.07.687Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFF200"
				fillRule="evenodd"
				d="M15.91 19.162h.18c.826 0 1.148-.321 1.197-.78.102-.971-.151-1.96.015-2.85.17-.905.757-1.775 1.56-2.032l-.78-.613-1.756 1.674-.173 1.705h-.306l-.173-1.705-1.757-1.674-.78.613c.804.257 1.391 1.127 1.56 2.032.167.89-.086 1.879.016 2.85.049.459.371.78 1.198.78Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="m16 25.142 4.06-4.822h-7.943L16 25.142Zm-.001-.424 3.484-4.13h-6.806l3.322 4.13Z"
				clipRule="evenodd"
			/>
			<path
				fill="#95806B"
				fillRule="evenodd"
				d="M15.888 22.544c-.004.004-.006 1.32-.017 1.544-.008.144-.007.323-.02.447l.148.184.156-.185-.047-.458-.039-1.528-.02-.082s-.088-.09-.16.078Z"
				clipRule="evenodd"
			/>
			<path
				fill="#576156"
				fillRule="evenodd"
				d="M15.735 22.196s-.041.037-.05.05c-.01.013-.027.028-.03.052-.003.025.029.034.04.035.011 0 .08-.048.106-.05.026 0 .114-.139-.066-.087Zm.095-.104c0-.003-.032-.004-.047.009-.015.012-.03.022-.015.043.015.022.103.028.063-.052Zm.069-.075c-.169-.306-.455-.668-1.212-.6-.07.02.277.04.274.074-.004.034-.044.035-.048.076-.004.041-.014.096.036.033.049-.063.069-.092.136-.086.067.006.138.02.138.05 0 .032-.097.065-.097.107 0 .042.016.068.028.042.012-.026.059-.077.112-.081.053-.004.085-.002.11.03.026.03-.002.066-.01.075-.01.009-.126.077-.125.097.001.02.02.036.034.024.013-.012.156-.136.199-.13.042.006.103.032.119.07.015.037-.032.058-.063.079-.032.02-.099.051-.083.072.016.02.055.02.072.005.017-.015.09-.084.152-.064.063.02.152.082.127.127-.026.044-.124.068-.166.06a1.505 1.505 0 0 0-.473.001.792.792 0 0 0-.37.182c-.041.047-.234.177-.244.199-.01.021-.041.065 0 .047.041-.018.175-.146.213-.136.037.01.025.067.031.083.006.015.03.01.037.003.006-.007-.015-.072.011-.105.027-.034.123-.105.137-.09.014.017.007.094.007.129 0 .034.017.044.028.031.01-.012.052-.157.09-.176.037-.018.068-.018.073 0 .005.016-.018.1-.004.142.014.041.064.045.07.004.004-.041-.013-.185.018-.205.03-.02.1-.052.116-.024.016.029-.013.144.023.155.035.01.068-.123.08-.135.011-.012.17-.052.176-.025.006.026-.029.083-.035.093a.346.346 0 0 0-.041.105c0 .027-.013.028-.028.031-.016.003-.126.017-.261.149-.136.132-.256.236-.288.291-.031.055-.155.191-.169.317-.014.126.008.095.013.092.005-.003.066-.131.088-.16.023-.028.031-.025.036-.008.005.018.032.09.035.071.003-.019.014-.143.014-.17 0-.028.003-.052.02-.053.017-.002.044-.021.043-.03-.002-.01.014-.022.033-.01.019.012.042.1.062.095.02-.005.013-.186.017-.216.004-.03.02-.045.035-.038.016.008.096.11.11.106.013-.005.006-.046-.014-.07a.09.09 0 0 1-.017-.082.31.31 0 0 1 .097-.113c.016-.003.069-.01.075.01.005.02.016.094.025.105.009.01.025-.034.025-.047 0-.013-.006-.104 0-.126.006-.023.137-.101.15-.07.012.03.038.071.053.105.014.035.023-.03.008-.082-.016-.052.013-.064.018-.068.005-.004.105-.012.105-.012s.062.103.021.122c-.04.019-.228.063-.362.252-.134.19-.152.242-.187.392-.035.15-.014.437.004.43.018-.009.04-.149.045-.182.006-.034.025-.05.036-.04.01.01.04.03.04.03s.005-.035-.005-.043a.28.28 0 0 1-.042-.082c-.002-.015-.005-.076.013-.097.02-.022.07-.003.072.015a.19.19 0 0 0 .017.046s.016-.026.012-.052c-.004-.027-.062-.053-.062-.092 0-.04.026-.078.052-.066.025.012.078.04.082.064.004.025.086.032.021-.05-.065-.082-.088-.07-.086-.105.002-.035.04-.122.058-.107a.38.38 0 0 1 .081.112c.01.033.028.02.03.005.004-.014-.032-.092-.036-.145-.003-.053-.018-.068.01-.096.029-.027.058-.014.064.014.006.028.03.075.038.092.008.016.023.004.024-.005.001-.01-.012-.108.004-.126.016-.019.174-.079.174-.079l.09-.055s.156.106.15.148a.233.233 0 0 1-.03.095c-.012.016.01.01.03 0 .02-.01.05-.066.054-.092.005-.027.086.031.09.055a.21.21 0 0 1-.024.112.407.407 0 0 0-.037.072.38.38 0 0 0 .09-.058c.014-.015.034-.048.052-.038.017.011.032.12.027.14-.005.018-.065.083-.08.1-.016.018-.04.047-.035.051a.22.22 0 0 0 .084-.04c.013-.013.069-.054.075-.043a.222.222 0 0 1 .023.072.291.291 0 0 1-.078.113c-.02.009.04.007.06-.002.018-.009.072-.017.075 0 .003.018.014.078 0 .096a.951.951 0 0 0-.055.076c-.011.018.017.01.028.006.011-.003.058-.024.058-.018 0 .006.01.054.01.096 0 .043-.016.16 0 .167.017.005.049-.15.052-.248.003-.097.021-.422-.183-.617-.203-.195-.224-.197-.258-.234-.033-.038-.006-.177.04-.181.046-.004.11.021.11.047.001.025.02.15.027.161.007.011.023.013.026-.03a.577.577 0 0 0-.01-.155c-.01-.024.024-.005.032 0 .008.003.142.027.134.145-.008.119-.002.184.006.183.01-.001.036-.05.049-.083.013-.033.004-.138.028-.135.024.003.122.04.126.13.004.09-.017.136-.037.163-.02.026-.025.068-.017.07a.347.347 0 0 0 .084-.054c.01-.011.05-.06.06-.081.012-.02.046.005.056.035.01.03 0 .188 0 .217 0 .029.031.015.032.005.001-.01.03-.152.056-.131a.25.25 0 0 1 .072.097c.006.028-.023.175-.012.18.012.005.055-.034.061-.043.006-.009.063-.032.072.018.01.049.061.14.063.153 0 .014.03-.048.027-.084a.88.88 0 0 0-.244-.447c-.191-.193-.386-.42-.787-.445-.4-.026-.156-.022-.16-.047-.004-.026.173-.172.214-.162.042.01.126.095.142.102.016.008.013-.056.013-.064s-.02-.067 0-.075c.02-.01.116-.014.136.058.02.072.04.09.051.099.011.009.03-.009.03-.019s-.028-.144-.003-.161c.024-.017.017-.02.059.007.041.026.11.119.11.198-.002.08.034.095.042.072a.561.561 0 0 0 .026-.204c-.015-.048.039-.015.054.024.016.04.091.143.093.177.002.035.037.037.03-.017-.008-.054-.02-.158-.034-.176-.015-.019.02.003.041.03.021.026.097.054.122.114.026.06.043.119.055.11.01-.01.025-.128.01-.146-.013-.017.145.113.16.123.017.01.115.08.103.052a1.823 1.823 0 0 0-.351-.32c-.116-.07-.192-.135-.409-.144a1.503 1.503 0 0 0-.428.043 1.068 1.068 0 0 0-.275.146c-.043.047-.05.089-.05.089v-.257s.066-.094.126-.078c.06.017.177.025.195.03.018.007.023-.022.017-.03-.006-.007-.085-.071-.138-.072-.053-.001-.088-.002-.106.003-.018.005.042-.114.117-.118.076-.003.135-.005.172.034.038.04.065.079.065.049 0-.031-.001-.104-.028-.125-.026-.02-.06-.054-.146-.037-.087.017.018-.03.018-.046 0-.017.047-.045.128-.049.082-.004.17.05.192.088.022.039.058.062.063.052.005-.01.018-.091-.036-.127-.054-.035-.11-.073-.11-.084 0-.011.021-.021.06-.017.04.004.145.026.182.06.036.035.055.017.052.008-.003-.01-.024-.074-.061-.092-.038-.017-.077-.038-.064-.054a.357.357 0 0 1 .19-.028c.051.014.124.014.132.042.008.027.012.055.02.047s.039-.061.003-.093c-.035-.031-.098-.024-.109-.042-.01-.018.227-.054.279-.058.05-.004.095.002.081-.022-.014-.023-.305-.031-.403-.01-.099.022-.422.093-.508.16-.087.069-.196.16-.241.223-.046.063-.092.162-.107.175-.014.012-.027.006-.034-.011-.007-.017.012-.642-.052-.97-.065-.33-.126.62-.123.686.004.067-.013.193-.013.193s-.07-.057-.084-.084c-.015-.026-.292-.227-.387-.243-.094-.015-.105.014-.037.06.068.047.108.03.11.05 0 .018.012.043.009.052-.003.009.068.008.083.006.016-.002.031-.003.042.007.01.011.008.033.008.033s-.028.003-.049.02c-.02.018-.014.033.024.032.038-.001.095-.02.102 0 .008.02.023.046.007.056-.015.01-.075.013-.074.024.002.01.127-.005.151.005.024.01.02.062-.005.066-.025.004-.069.006-.065.025.004.02.01.022.05.02.039-.002.056-.02.08.008.024.027.021.079.021.079s-.06-.002-.07 0c-.01.001-.008.02.014.025a.89.89 0 0 0 .064.01l.007.106.003.053Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				stroke="#231F20"
				strokeMiterlimit={2.61}
				strokeWidth={0.007}
				d="M15.97 22.588v.004a.104.104 0 1 1-.104-.104c-.057 0-.104-.042-.104-.094 0-.04.03-.075.07-.088a.158.158 0 0 1-.019-.076c0-.066.035-.118.079-.118.03 0 .056.025.07.062a.104.104 0 1 1 .152.143.104.104 0 0 1 .057.173.104.104 0 1 1-.13.088.104.104 0 0 1-.07.01Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="m12.822 26.46.347-.724a3.247 3.247 0 0 1 2.83-.06c.365-.152 1.144-.412 2.06-.201.281.064.521.161.718.26l.347.725-.164.122.085.15-.138.138a2.91 2.91 0 0 0-1.313-.387 2.934 2.934 0 0 0-1.594.39 3.362 3.362 0 0 0-1.586-.39 3.359 3.359 0 0 0-1.516.373l-.138-.138c.023-.05.114-.146.114-.146l-.052-.111Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M16 25.913a2.95 2.95 0 0 0-1.412-.347 2.944 2.944 0 0 0-1.291.314l-.166.41A3.205 3.205 0 0 1 16 26.4c.22-.138.68-.383 1.313-.427.735-.05 1.289.2 1.521.32l-.181-.413a3.044 3.044 0 0 0-2.653.033Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M9.192 26.04c-.048-.088.084-.19.176-.116.877.715 1.357.76 2.442 1.14l.206.647c.023.672.36.811.567 1.438-.708-.145-1.162-.365-1.69-.832-.646-.572-1.305-1.552-1.701-2.277Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M12.268 28.872c-.204-.238-.276-.533-.292-.86-.01-.197-.406-.356-.385-.54-.443-.155-.598-.34-1.015-.545a4.96 4.96 0 0 1-.97-.596c.307.6.922 1.396 1.532 1.925.408.354.88.616 1.13.616Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M11.878 27.925c-.709-.228-1.402-1.06-1.804-1.657-.31-.46-.627-1.018-.882-1.558-.043-.09.084-.19.176-.116.784.639 1.556 1.258 2.53 1.598l.134.047-.016.142c-.051.436-.053.896.086 1.318l.11.333-.334-.108Z"
				clipRule="evenodd"
			/>
			<path
				fill="#ED1C24"
				fillRule="evenodd"
				d="M11.933 27.754c-.146-.44-.15-.921-.095-1.394-.792-.277-1.544-.78-2.25-1.356.465 1.123 1.494 2.477 2.345 2.75Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M22.693 26.04c.048-.088-.084-.19-.176-.116-.877.715-1.357.76-2.442 1.14l-.206.647c-.023.672-.36.811-.567 1.438.708-.145 1.162-.365 1.69-.832.646-.572 1.305-1.552 1.701-2.277Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M19.618 28.872c.203-.238.276-.533.291-.86.01-.197.406-.356.385-.54.443-.155.598-.34 1.015-.545.328-.161.66-.343.97-.596-.306.6-.922 1.396-1.532 1.925-.407.354-.88.616-1.13.616Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M20.007 27.925c.708-.228 1.402-1.06 1.804-1.657.31-.46.627-1.018.882-1.558.043-.09-.084-.19-.176-.116-.784.639-1.556 1.258-2.53 1.598l-.134.047.016.142c.051.436.053.896-.087 1.318l-.11.333.335-.108Z"
				clipRule="evenodd"
			/>
			<path
				fill="#ED1C24"
				fillRule="evenodd"
				d="M19.952 27.754c.146-.44.15-.921.095-1.394.792-.277 1.544-.78 2.25-1.356-.465 1.123-1.494 2.477-2.345 2.75Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M19.626 28.697c-.628.103-1.257.207-1.888.284-.832.101-1.655.15-2.494.12a17.378 17.378 0 0 1-3.024-.398l-.124-.026-.027-.124-.3-1.378-.063-.293.294.058c1.945.385 3.857.515 5.833.317a21.09 21.09 0 0 0 2.076-.317l.308-.062-.078.304-.355 1.37-.032.125-.126.02Z"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M19.948 27.133c-2.576.52-5.04.583-7.987 0l.3 1.378c3.171.68 5.021.371 7.333-.008l.354-1.37Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				d="M12.708 27.802 12.7 27.8l-.083.432c-.005.027-.004.045.003.055.008.01.028.018.06.027l-.007.04-.202-.039.008-.04c.033.004.056.004.066-.002.01-.007.018-.023.023-.05l.07-.364c.006-.027.005-.045-.003-.054-.007-.01-.027-.019-.06-.027l.007-.04.252.048.052.413.194-.366.255.05-.008.04c-.034-.004-.056-.004-.067.003-.01.006-.018.022-.024.049l-.07.364c-.005.027-.004.045.004.054.008.01.028.02.061.028l-.008.04-.292-.056.008-.04c.033.003.056.003.066-.003.01-.006.018-.023.023-.05l.083-.431-.006-.001-.268.507-.058-.012-.072-.572v-.001Zm1.314.513.16.014-.056-.237-.104.223Zm-.188.224.003-.041a.084.084 0 0 0 .045-.019.175.175 0 0 0 .037-.055l.22-.45.094.008.132.491a.129.129 0 0 0 .025.054.09.09 0 0 0 .044.023l-.003.041-.285-.025.003-.041a.149.149 0 0 0 .054-.005.027.027 0 0 0 .017-.025.096.096 0 0 0-.004-.028l-.021-.095-.192-.017-.03.07-.001.003a.153.153 0 0 0-.014.04c0 .012.003.021.011.028a.135.135 0 0 0 .048.017l-.004.041-.18-.015Zm1.709-.097.005-.288c0-.028-.004-.046-.014-.054s-.03-.013-.064-.016l.001-.04.205.003v.04c-.034.002-.056.007-.065.015-.01.008-.014.025-.015.052l-.008.49-.065-.001-.351-.471-.006.346c0 .027.003.045.012.053.01.008.031.014.065.016v.042l-.205-.004v-.041c.034-.002.056-.007.065-.014.009-.008.014-.025.014-.053l.006-.37c0-.028-.003-.045-.012-.053-.009-.008-.03-.013-.064-.017v-.04l.194.002.302.403Zm.889-.058.16-.006-.085-.228-.075.234Zm-.159.246-.001-.041a.081.081 0 0 0 .042-.024.179.179 0 0 0 .03-.06l.16-.474.095-.004.193.47c.01.025.02.041.032.05a.09.09 0 0 0 .047.018l.002.041-.286.011-.002-.04a.139.139 0 0 0 .052-.013.027.027 0 0 0 .014-.026.09.09 0 0 0-.007-.028l-.033-.092-.192.008-.021.074-.001.003a.146.146 0 0 0-.008.042c0 .011.005.02.014.025.01.006.026.01.05.012l.002.04-.181.008Zm1.379-.573.041.367c.004.03.01.048.022.055.01.007.031.009.061.005.06-.006.1-.03.12-.07.02-.04.026-.106.015-.2-.01-.094-.03-.158-.06-.192-.028-.034-.072-.048-.132-.04-.03.003-.05.009-.059.018-.009.01-.012.029-.008.057Zm-.16.501-.005-.04c.029-.007.047-.014.054-.023.008-.01.01-.027.007-.053l-.042-.368c-.003-.026-.01-.043-.018-.05-.01-.007-.03-.01-.059-.01l-.004-.041.28-.032c.108-.012.192.003.255.047.062.044.099.113.11.207.01.095-.01.17-.06.228-.052.057-.13.09-.238.103l-.28.032Zm1.545-.28a.094.094 0 0 0 .075-.078.557.557 0 0 0-.026-.21.55.55 0 0 0-.078-.194c-.027-.033-.061-.043-.103-.033a.093.093 0 0 0-.075.079.558.558 0 0 0 .026.208.557.557 0 0 0 .078.196.094.094 0 0 0 .103.033Zm.01.042a.268.268 0 0 1-.205-.026.286.286 0 0 1-.09-.082.363.363 0 0 1-.055-.121.355.355 0 0 1-.01-.132.293.293 0 0 1 .04-.116.26.26 0 0 1 .167-.121.278.278 0 0 1 .106-.008.29.29 0 0 1 .19.116.355.355 0 0 1 .055.12c.012.046.015.09.01.132a.298.298 0 0 1-.04.116.264.264 0 0 1-.167.122Z"
			/>
			<path
				fill="#231F20"
				fillRule="evenodd"
				d="M6.76 29.477c-.983-1.458-1.882-2.942-2.658-4.522a29.969 29.969 0 0 1-.746-1.638 26.907 26.907 0 0 1-1.541-5.009c-.418-2.032-.62-4.107-.708-6.178l-.003-.06.035-.05a25.326 25.326 0 0 1 2.835-3.362A29.589 29.589 0 0 1 7.55 5.607c.485-.351.98-.688 1.483-1.012a34.782 34.782 0 0 1 3.441-1.937 34.37 34.37 0 0 1 3.466-1.478l.06-.022.062.022c1.18.427 2.339.924 3.466 1.478a34.763 34.763 0 0 1 3.44 1.937c.504.324 1 .66 1.484 1.012a29.612 29.612 0 0 1 3.575 3.051 25.309 25.309 0 0 1 2.835 3.362l.035.05-.003.06c-.088 2.07-.29 4.146-.708 6.178a26.903 26.903 0 0 1-1.541 5.01c-.232.553-.481 1.098-.746 1.637-.776 1.58-1.675 3.064-2.659 4.522l-.038.057-.067.017c-2.992.751-6.037 1.36-9.134 1.36-3.097 0-6.142-.609-9.134-1.36l-.067-.017-.038-.057ZM16 30.732c-3.03 0-6.01-.58-9.091-1.355-1.092-1.618-1.917-3.015-2.647-4.5-1.767-3.598-2.743-7.257-2.977-12.755 1.586-2.271 3.8-4.506 6.369-6.37C10.262 3.86 13.236 2.348 16 1.348c2.764 1 5.738 2.512 8.345 4.404 2.57 1.864 4.783 4.1 6.37 6.37-.235 5.498-1.21 9.157-2.978 12.754-.73 1.486-1.554 2.883-2.646 4.501-3.082.775-6.06 1.355-9.091 1.355Z"
				clipRule="evenodd"
			/>
			<path
				fill="#231F20"
				d="m5.646 15.31.48.147a.553.553 0 0 0 .182.037.132.132 0 0 0 .077-.043.43.43 0 0 0 .071-.154l.044.014-.268.876-.045-.013a.405.405 0 0 0 .028-.17.133.133 0 0 0-.04-.077.551.551 0 0 0-.172-.072l-1.121-.344a.55.55 0 0 0-.183-.036.132.132 0 0 0-.077.042.43.43 0 0 0-.071.155l-.045-.014.23-.752c.077-.247.176-.412.297-.492a.43.43 0 0 1 .38-.06.441.441 0 0 1 .256.192.555.555 0 0 1 .075.338c-.005.088-.037.23-.098.427Zm-.845-.259.747.23.022-.064c.031-.103.025-.193-.02-.268-.044-.075-.13-.132-.26-.172-.128-.039-.23-.04-.307-.002-.076.038-.132.113-.166.224l-.016.052Zm.624-2.05c.111-.266.285-.442.522-.53a.902.902 0 0 1 .72.037.961.961 0 0 1 .462.436c.134.257.133.533-.003.826-.137.295-.342.476-.616.545a.952.952 0 0 1-.649-.07.897.897 0 0 1-.491-.529.871.871 0 0 1 .055-.716Zm.083.02c-.07.15-.046.3.07.449.095.122.26.237.495.346.279.13.507.175.687.139a.371.371 0 0 0 .273-.223.385.385 0 0 0 .036-.236.546.546 0 0 0-.17-.28 1.503 1.503 0 0 0-.413-.265c-.216-.1-.387-.155-.513-.164a.518.518 0 0 0-.298.049.404.404 0 0 0-.167.185Zm2.465-1.928.475.421-.927 1.302-.038-.027.035-.049a.248.248 0 0 0 .05-.119.12.12 0 0 0-.022-.08.56.56 0 0 0-.129-.11l-.969-.69a.6.6 0 0 0-.15-.09.135.135 0 0 0-.084.014.235.235 0 0 0-.091.082l-.035.049-.037-.027.557-.783.038.027-.046.065a.253.253 0 0 0-.05.119.132.132 0 0 0 .02.082c.012.02.055.057.13.11l.937.668a.593.593 0 0 0 .153.089c.027.006.054 0 .082-.018a.646.646 0 0 0 .103-.123l.087-.122a.507.507 0 0 0 .097-.223.446.446 0 0 0-.034-.227 1.292 1.292 0 0 0-.185-.294l.033-.046Zm1.15-.423.035.03-.614.71-.035-.03.039-.044a.25.25 0 0 0 .061-.114.122.122 0 0 0-.014-.082.565.565 0 0 0-.118-.122l-.9-.777a.611.611 0 0 0-.142-.103.134.134 0 0 0-.084.005.232.232 0 0 0-.098.073l-.04.045-.035-.03.614-.71.036.03-.04.045a.248.248 0 0 0-.06.113.128.128 0 0 0 .013.083c.01.021.05.062.119.121l.9.778c.07.06.117.095.141.102a.139.139 0 0 0 .085-.005.23.23 0 0 0 .098-.073l.039-.045Zm.13-2.464.32.368-.035.03a.773.773 0 0 0-.23-.121.362.362 0 0 0-.185.004.457.457 0 0 0-.15.098l-.102.089.913 1.053c.06.07.103.11.126.122.022.01.05.013.084.007a.233.233 0 0 0 .108-.059l.044-.039.03.035-.709.615-.03-.035.045-.038a.245.245 0 0 0 .076-.104.13.13 0 0 0-.001-.084.567.567 0 0 0-.1-.137l-.913-1.052-.098.085c-.092.08-.14.156-.149.23a.51.51 0 0 0 .091.327l-.039.034-.319-.368 1.224-1.06Zm.996-.52.361.64.032-.019c.1-.056.154-.128.164-.216a.661.661 0 0 0-.07-.324l.044-.026.465.822-.045.026a.707.707 0 0 0-.183-.187.291.291 0 0 0-.169-.057.454.454 0 0 0-.188.068l.25.441a.713.713 0 0 0 .1.152c.018.016.04.024.068.025a.223.223 0 0 0 .107-.037l.094-.053a.65.65 0 0 0 .296-.3.646.646 0 0 0 .015-.418l.043-.024.211.539-1.356.766-.022-.04.051-.03a.249.249 0 0 0 .096-.086.121.121 0 0 0 .015-.082.56.56 0 0 0-.07-.154l-.586-1.036a.952.952 0 0 0-.08-.128.125.125 0 0 0-.078-.039.224.224 0 0 0-.139.035l-.052.03-.022-.04 1.312-.742.263.464-.045.025a.648.648 0 0 0-.232-.19.4.4 0 0 0-.233-.013 1.06 1.06 0 0 0-.254.116l-.163.092Zm2.373-.466.87.524c.123.073.222.118.297.133a.28.28 0 0 0 .154-.012l.016.043-.877.328-.016-.044c.053-.026.086-.048.097-.066a.06.06 0 0 0 .007-.056c-.013-.035-.076-.088-.188-.156l-.569-.342-.044.075.173.462a.57.57 0 0 0 .076.16c.019.018.045.03.079.034a.315.315 0 0 0 .145-.027l.016.043-.852.318-.016-.043.056-.021a.249.249 0 0 0 .108-.07.121.121 0 0 0 .027-.08.565.565 0 0 0-.045-.163l-.416-1.114a.615.615 0 0 0-.075-.158.136.136 0 0 0-.076-.036.233.233 0 0 0-.122.017l-.056.021-.016-.043.84-.314.015.044a.291.291 0 0 0-.12.074.128.128 0 0 0-.03.078.544.544 0 0 0 .045.166l.197.527.44-.74c.06-.104.082-.178.066-.221-.012-.033-.04-.05-.082-.056a.445.445 0 0 0-.142.032l-.016-.043.657-.246.016.044a.391.391 0 0 0-.127.084 2.07 2.07 0 0 0-.166.262l-.346.582Zm1.675-1.114 1.035.983-.107-.767c-.015-.108-.041-.179-.077-.213-.05-.046-.124-.06-.223-.044l-.007-.046.59-.083.007.046a.462.462 0 0 0-.147.059.159.159 0 0 0-.05.084.53.53 0 0 0 .004.183l.208 1.488-.044.006-1.415-1.32.16 1.139c.014.103.047.17.1.2.052.03.109.04.17.031l.041-.005.007.045-.636.09-.007-.046c.099-.015.165-.045.198-.09.033-.046.043-.116.03-.212l-.178-1.263-.043-.041a.353.353 0 0 0-.114-.082.294.294 0 0 0-.129-.008l-.006-.046.633-.088Zm2.451 1.657v.046l-.94-.026.002-.046.06.002a.246.246 0 0 0 .126-.025.122.122 0 0 0 .055-.063.56.56 0 0 0 .019-.168l.033-1.189a.613.613 0 0 0-.01-.174.134.134 0 0 0-.057-.063.231.231 0 0 0-.119-.03l-.06-.001.002-.046.939.026-.002.046-.06-.002a.246.246 0 0 0-.125.025.129.129 0 0 0-.056.063.564.564 0 0 0-.019.168l-.033 1.19a.585.585 0 0 0 .01.174c.01.023.029.044.058.062a.23.23 0 0 0 .118.03l.06.001Zm1.321-.857.467.901c.066.128.127.217.182.27.04.036.087.06.138.07l-.009.045-.919-.18.009-.046c.06.006.098.004.118-.005a.061.061 0 0 0 .035-.044c.007-.037-.019-.114-.079-.232l-.304-.59-.077.041-.095.484a.575.575 0 0 0-.02.177.134.134 0 0 0 .05.07c.026.022.072.04.138.053l-.009.045-.892-.176.009-.045.058.011c.052.01.095.01.13-.003a.122.122 0 0 0 .064-.053.571.571 0 0 0 .047-.162l.23-1.167a.605.605 0 0 0 .019-.174.133.133 0 0 0-.046-.071.235.235 0 0 0-.113-.05l-.058-.01.009-.046.878.173-.009.045a.293.293 0 0 0-.142 0 .129.129 0 0 0-.065.051.546.546 0 0 0-.049.165l-.109.552.763-.4c.106-.057.163-.108.172-.153.007-.034-.006-.064-.04-.091a.443.443 0 0 0-.138-.047l.009-.045.688.136-.009.045a.39.39 0 0 0-.152.005c-.039.01-.132.056-.279.136l-.6.314Zm2.807.26.224 1.41.38-.674c.055-.095.078-.166.07-.215-.012-.067-.062-.124-.15-.171l.022-.04.519.293-.023.04a.469.469 0 0 0-.152-.042.158.158 0 0 0-.091.036.529.529 0 0 0-.109.148l-.74 1.308-.038-.022-.32-1.909-.567 1.001c-.05.091-.065.164-.042.22a.26.26 0 0 0 .116.128l.037.021-.023.04-.56-.316.024-.04c.087.048.157.065.211.049.054-.016.104-.066.152-.15l.628-1.11-.01-.06a.35.35 0 0 0-.04-.134.297.297 0 0 0-.098-.084l.023-.04.557.314Zm1.804 1.285-.454.578.028.022c.09.07.178.094.263.07a.658.658 0 0 0 .273-.19l.04.033-.582.743-.04-.032a.703.703 0 0 0 .102-.24.291.291 0 0 0-.012-.178.452.452 0 0 0-.134-.149l-.313.4a.715.715 0 0 0-.102.15.107.107 0 0 0 .003.072c.01.026.034.054.075.086l.085.067a.651.651 0 0 0 .39.158.645.645 0 0 0 .392-.145l.039.03-.418.4-1.225-.96.029-.037.046.037c.041.032.08.05.117.056a.121.121 0 0 0 .081-.018.56.56 0 0 0 .116-.124l.734-.936a.938.938 0 0 0 .088-.123.126.126 0 0 0 .006-.087.224.224 0 0 0-.085-.115l-.047-.036.029-.037 1.186.931-.33.42-.04-.032a.652.652 0 0 0 .089-.288.402.402 0 0 0-.078-.22 1.064 1.064 0 0 0-.203-.19l-.148-.116Zm2.365 2.17-.48.415-.03-.035a.805.805 0 0 0 .122-.46.633.633 0 0 0-.153-.383.503.503 0 0 0-.306-.181.612.612 0 0 0-.364.063c-.127.06-.244.137-.352.23-.131.113-.232.227-.304.343a.515.515 0 0 0-.088.337c.013.108.06.21.142.304a.65.65 0 0 0 .098.091.914.914 0 0 0 .122.08l.282-.244a.425.425 0 0 0 .097-.102c.01-.021.01-.05.003-.083a.22.22 0 0 0-.052-.1l-.03-.036.035-.03.573.663-.035.03a.38.38 0 0 0-.113-.087.139.139 0 0 0-.092 0 .382.382 0 0 0-.103.073l-.282.244a1.782 1.782 0 0 1-.606-.464 1.123 1.123 0 0 1-.225-.367 1.052 1.052 0 0 1-.057-.347.866.866 0 0 1 .061-.32.891.891 0 0 1 .25-.338.923.923 0 0 1 .706-.233.988.988 0 0 1 .683.361c.06.068.107.134.143.197.02.035.046.095.078.183a.765.765 0 0 0 .064.15c.016.019.038.03.066.034a.242.242 0 0 0 .117-.023l.03.035Zm.553 1.12-.636.37.018.03c.058.1.13.153.219.162a.662.662 0 0 0 .323-.074l.026.044-.816.475-.026-.045a.7.7 0 0 0 .184-.185.29.29 0 0 0 .055-.17.451.451 0 0 0-.07-.187l-.438.254a.72.72 0 0 0-.151.103.107.107 0 0 0-.023.068c-.001.027.011.063.037.107l.055.093a.65.65 0 0 0 .304.292.645.645 0 0 0 .417.01l.025.043-.536.218-.783-1.347.04-.023.03.051a.247.247 0 0 0 .088.095c.022.014.05.018.082.014a.566.566 0 0 0 .153-.072l1.029-.598a.963.963 0 0 0 .127-.082.124.124 0 0 0 .038-.078.225.225 0 0 0-.037-.138l-.03-.052.04-.023.758 1.304-.461.268-.026-.045a.65.65 0 0 0 .189-.234.4.4 0 0 0 .009-.233 1.061 1.061 0 0 0-.119-.253l-.094-.162Zm.072 2.075-.471.192a.55.55 0 0 0-.164.087.131.131 0 0 0-.032.081.43.43 0 0 0 .044.165l-.043.018-.35-.854.043-.018c.031.078.06.127.085.149a.134.134 0 0 0 .08.035.538.538 0 0 0 .176-.053l1.09-.447a.548.548 0 0 0 .164-.086c.02-.02.03-.048.032-.082a.428.428 0 0 0-.043-.165l.043-.017.317.775c.083.202.13.355.14.46a.48.48 0 0 1-.061.293.448.448 0 0 1-.228.197.428.428 0 0 1-.36-.008.588.588 0 0 1-.213-.19l-.401.63a.935.935 0 0 0-.09.17.228.228 0 0 0 .007.134l-.046.018-.215-.525.54-.85-.045-.11Zm.816-.335-.728.298.028.07a.865.865 0 0 0 .136.244c.045.048.1.077.168.087a.444.444 0 0 0 .232-.038c.127-.052.209-.12.245-.204.036-.085.027-.193-.028-.325l-.053-.132Zm-.878 2.688-.045.011-.234-.91.045-.01.015.057c.013.05.033.089.059.115.018.02.043.031.075.035a.563.563 0 0 0 .167-.028l1.152-.296a.613.613 0 0 0 .165-.058.134.134 0 0 0 .044-.072.233.233 0 0 0-.004-.123l-.015-.058.045-.011.234.91-.045.01-.015-.057a.246.246 0 0 0-.058-.114.129.129 0 0 0-.076-.036.567.567 0 0 0-.167.028l-1.152.296a.593.593 0 0 0-.165.058.139.139 0 0 0-.044.073.234.234 0 0 0 .004.122l.015.058Z"
			/>
		</g>
		<path
			fill="#231F20"
			d="M42.346 8h-1.584V.332h1.584V8Zm-.696-1.326h4.014V8H41.65V6.674ZM46.727 8V.332h1.548V8h-1.548Zm.462 0V6.686h4.71V8h-4.71Zm.438-3.258V3.464h4.134v1.278h-4.134Zm-.444-3.108V.332h4.668v1.302h-4.668ZM53.076 8l.252-7.668h2.268l1.44 4.878h.078L58.548.332h2.262L61.068 8h-1.524l-.072-2.76-.066-3.186h-.096l-1.506 5.052H56.34l-1.512-5.052h-.096l-.066 3.192L54.6 8h-1.524Zm10.54 0V6.74h2.148c.416 0 .712-.082.888-.246.176-.168.264-.406.264-.714v-.144c0-.316-.09-.556-.27-.72-.176-.164-.48-.246-.912-.246h-2.136V3.494h2.1c.396 0 .678-.082.846-.246.168-.164.252-.394.252-.69V2.48c0-.296-.082-.522-.246-.678-.164-.156-.448-.234-.852-.234h-2.112V.332h2.274c.888 0 1.526.158 1.914.474.388.316.582.774.582 1.374v.102c0 .456-.114.81-.342 1.062-.224.252-.576.402-1.056.45v.06c.54.088.932.28 1.176.576.248.296.372.712.372 1.248v.198c0 .688-.204 1.214-.612 1.578-.404.364-1.054.546-1.95.546h-2.328ZM62.5 8V.332h1.53V8H62.5Zm6.579 0L71.34.332h2.394L75.99 8H74.4l-1.788-6.63h-.144L70.669 8h-1.59Zm1.716-1.956V4.79h3.468v1.254h-3.468Zm8.338 2.118c-.584 0-1.074-.122-1.47-.366a2.303 2.303 0 0 1-.888-1.068c-.196-.468-.294-1.032-.294-1.692V3.512c0-1.084.288-1.912.864-2.484.58-.572 1.428-.858 2.544-.858.36 0 .69.028.99.084.304.052.578.12.822.204.248.08.462.17.642.27l.132 1.356a5.686 5.686 0 0 0-1.002-.396 4.354 4.354 0 0 0-1.284-.174c-.72 0-1.25.172-1.59.516-.34.344-.51.862-.51 1.554v1.458c0 .568.132 1.006.396 1.314.268.308.678.462 1.23.462.26 0 .484-.04.672-.12.188-.08.344-.188.468-.324.124-.136.218-.284.282-.444V4.322l.216.486-1.578.006V3.566h2.88v3.192l-1.548-.006a2.167 2.167 0 0 1-.312.714c-.144.212-.35.382-.618.51-.268.124-.616.186-1.044.186Zm2.046-1.74h1.476V8h-1.53l.054-1.578ZM83.528 8 85.79.332h2.394L90.44 8h-1.59l-1.788-6.63h-.144L85.118 8h-1.59Zm1.716-1.956V4.79h3.468v1.254h-3.468ZM43.06 20.156c-.356 0-.69-.026-1.002-.078a6.893 6.893 0 0 1-.84-.192 6.549 6.549 0 0 1-.642-.24l-.138-1.488c.312.164.682.312 1.11.444.428.128.884.192 1.368.192.512 0 .882-.074 1.11-.222.228-.148.342-.376.342-.684v-.066c0-.2-.05-.364-.15-.492-.096-.132-.258-.248-.486-.348a6.644 6.644 0 0 0-.93-.306c-.552-.152-1.006-.324-1.362-.516-.352-.196-.612-.438-.78-.726-.168-.292-.252-.658-.252-1.098v-.072c0-.672.226-1.188.678-1.548.456-.36 1.128-.54 2.016-.54.552 0 1.026.05 1.422.15.396.1.728.216.996.348l.138 1.386c-.3-.16-.644-.292-1.032-.396a4.642 4.642 0 0 0-1.26-.162c-.34 0-.61.032-.81.096-.196.064-.338.158-.426.282a.783.783 0 0 0-.126.45v.018c0 .18.044.336.132.468.092.132.254.254.486.366.232.108.562.22.99.336.544.152.988.316 1.332.492.348.176.606.404.774.684.168.28.252.65.252 1.11v.108c0 .74-.242 1.3-.726 1.68-.48.376-1.208.564-2.184.564Zm4.1-.156v-7.668h1.548V20H47.16Zm.462 0v-1.314h4.71V20h-4.71Zm.438-3.258v-1.278h4.134v1.278H48.06Zm-.444-3.108v-1.302h4.668v1.302h-4.668ZM57.968 20l-.174-1.494a2.115 2.115 0 0 0-.168-.672.872.872 0 0 0-.378-.408c-.168-.096-.4-.144-.696-.144l-1.854-.006v-1.212l1.95-.006c.436 0 .748-.1.936-.3.192-.204.288-.494.288-.87v-.144c0-.372-.096-.654-.288-.846-.188-.196-.504-.294-.948-.294H54.68v-1.272h2.178c.9 0 1.556.182 1.968.546.416.364.624.882.624 1.554v.168c0 .504-.122.904-.366 1.2-.244.296-.632.472-1.164.528v.216l-.438-.216c.456.032.808.128 1.056.288.252.16.436.382.552.666.116.28.204.628.264 1.044L59.588 20h-1.62Zm-4.362 0v-7.668h1.536v4.164l.012.582V20h-1.548Zm8.754 0v-7.374h1.578V20H62.36Zm-2.184-6.354v-1.314h5.934v1.314h-5.934ZM68.796 20h-1.579v-7.668h1.578V20Zm1.532 0v-7.668H71.9V20h-1.572Zm.9-2.856v-1.32H75.2v1.32h-3.972Zm-.444-3.486v-1.326h4.506v1.326h-4.506ZM78.076 20H76.5v-7.668h1.578V20Zm5.926 0-2.352-3.396h-.618v-1.05h.618l2.322-3.222h1.782l-2.826 3.846-.006-.36L85.838 20h-1.836Zm-4.392 0v-7.668h1.566V20H79.61Zm6.52 0 2.261-7.668h2.394L93.043 20h-1.59l-1.788-6.63h-.145L87.72 20h-1.59Zm1.716-1.956V16.79h3.468v1.254h-3.468Zm8.417 2.112c-.356 0-.69-.026-1.002-.078a6.893 6.893 0 0 1-.84-.192 6.549 6.549 0 0 1-.642-.24l-.138-1.488c.312.164.682.312 1.11.444.428.128.884.192 1.368.192.512 0 .882-.074 1.11-.222.228-.148.342-.376.342-.684v-.066c0-.2-.05-.364-.15-.492-.096-.132-.258-.248-.486-.348a6.644 6.644 0 0 0-.93-.306c-.552-.152-1.006-.324-1.362-.516-.352-.196-.612-.438-.78-.726-.168-.292-.252-.658-.252-1.098v-.072c0-.672.226-1.188.678-1.548.456-.36 1.128-.54 2.016-.54.552 0 1.026.05 1.422.15.396.1.728.216.996.348l.138 1.386c-.3-.16-.644-.292-1.032-.396a4.642 4.642 0 0 0-1.26-.162c-.34 0-.61.032-.81.096-.196.064-.338.158-.426.282a.783.783 0 0 0-.126.45v.018c0 .18.044.336.132.468.092.132.254.254.486.366.232.108.562.22.99.336.544.152.988.316 1.332.492.348.176.606.404.774.684.168.28.252.65.252 1.11v.108c0 .74-.242 1.3-.726 1.68-.48.376-1.208.564-2.184.564Zm5.685-.156h-1.578v-7.668h1.578V20Zm-60.136 9.696v-1.284h1.956c.432 0 .744-.1.936-.3.196-.204.294-.498.294-.882v-.438c0-.392-.096-.686-.288-.882-.192-.2-.504-.3-.936-.3h-1.962v-1.278h2.052c.932 0 1.614.21 2.046.63.436.42.654 1.016.654 1.788v.528c0 .772-.218 1.368-.654 1.788-.432.42-1.114.63-2.046.63h-2.052ZM40.762 32v-7.668h1.548v4.446l.006.714V32h-1.554Zm11.323 0-.174-1.494a2.115 2.115 0 0 0-.168-.672.872.872 0 0 0-.378-.408c-.168-.096-.4-.144-.696-.144l-1.854-.006v-1.212l1.95-.006c.436 0 .748-.1.936-.3.192-.204.288-.494.288-.87v-.144c0-.372-.096-.654-.288-.846-.188-.196-.504-.294-.948-.294h-1.956v-1.272h2.178c.9 0 1.556.182 1.968.546.416.364.624.882.624 1.554v.168c0 .504-.122.904-.366 1.2-.244.296-.632.472-1.164.528v.216l-.438-.216c.456.032.808.128 1.056.288.252.16.436.382.552.666.116.28.204.628.264 1.044L53.705 32h-1.62Zm-4.362 0v-7.668h1.536v4.164l.012.582V32h-1.548Zm10.072.174c-1.06 0-1.863-.276-2.407-.828-.54-.556-.81-1.35-.81-2.382v-1.56c0-1.036.27-1.834.81-2.394.544-.56 1.346-.84 2.407-.84 1.06 0 1.86.28 2.4.84.544.56.816 1.358.816 2.394v1.56c0 1.032-.27 1.826-.81 2.382-.54.552-1.343.828-2.407.828Zm0-1.308c.54 0 .944-.16 1.212-.48.268-.32.401-.77.401-1.35v-1.704c0-.6-.133-1.06-.401-1.38-.268-.324-.672-.486-1.212-.486-.537 0-.939.162-1.206.486-.268.32-.402.78-.402 1.38v1.704c0 .58.134 1.03.402 1.35.267.32.67.48 1.206.48ZM62.288 32v-7.668h1.572V32H62.29Zm.9-2.856v-1.32h3.972v1.32H63.19Zm-.444-3.486v-1.326h4.506v1.326h-4.506ZM68.453 32v-7.668h1.548V32h-1.548Zm.462 0v-1.314h4.71V32h-4.71Zm.438-3.258v-1.278h4.134v1.278h-4.134Zm-.444-3.108v-1.302h4.668v1.302H68.91Zm8.288 6.522c-.356 0-.69-.026-1.002-.078a6.893 6.893 0 0 1-.84-.192 6.549 6.549 0 0 1-.642-.24l-.138-1.488c.312.164.682.312 1.11.444.428.128.884.192 1.368.192.512 0 .882-.074 1.11-.222.228-.148.342-.376.342-.684v-.066c0-.2-.05-.364-.15-.492-.096-.132-.258-.248-.486-.348a6.644 6.644 0 0 0-.93-.306c-.552-.152-1.006-.324-1.362-.516-.352-.196-.612-.438-.78-.726-.168-.292-.252-.658-.252-1.098v-.072c0-.672.226-1.188.678-1.548.456-.36 1.128-.54 2.016-.54.552 0 1.026.05 1.422.15.396.1.728.216.996.348l.138 1.386c-.3-.16-.644-.292-1.032-.396a4.642 4.642 0 0 0-1.26-.162c-.34 0-.61.032-.81.096-.196.064-.338.158-.426.282a.783.783 0 0 0-.126.45v.018c0 .18.044.336.132.468.092.132.254.254.486.366.232.108.562.22.99.336.544.152.988.316 1.332.492.348.176.606.404.774.684.168.28.252.65.252 1.11v.108c0 .74-.242 1.3-.726 1.68-.48.376-1.208.564-2.184.564ZM82.88 32h-1.578v-7.668h1.578V32Z"
		/>
		<defs>
			<clipPath id="logo-lsp-polimdo_svg__a">
				<path
					fill="#fff"
					d="M0 0h32v32H0z"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SvgLSP;
