// import { useState, useCallback, useEffect, useRef } from "react";
// import { BsEmojiHeartEyes } from "react-icons/bs";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numAllow, setNumAllow] = useState(true);
//   const [charAllow, setCharAllow] = useState(true);
//   const [password, setPassword] = useState("");
//   const [initialR, changeInitialR] = useState(-1);
//   const [finalR, changeFinalR] = useState(-1);

//   // Ref hook
//   const passwordRef = useRef(null);

//   const passWordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numAllow) str += "0123456789";
//     if (charAllow) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//     for (let i = 1; i <= length; i++) {
//       let index = Math.floor(Math.random() * str.length);
//       pass += str.charAt(index);
//     }

//     setPassword(pass);
//   }, [length, numAllow, charAllow, setPassword]);

//   // Additional Functions
//   const handleInitialChange = useCallback(
//     (e) => changeInitialR(parseInt(e.target.value)),
//     []
//   );

//   const handleFinalChange = useCallback(
//     (e) => changeFinalR(parseInt(e.target.value)),
//     []
//   );

//   const copyPassword = useCallback(() => {
//     const start = initialR !== -1 ? initialR : 0;
//     const end = finalR !== -1 ? finalR : password.length;
//     const selectedText = password.substring(start, end);
//     navigator.clipboard.writeText(selectedText).then(() => {
//       console.log("Copied to clipboard: ", selectedText);
//     });
//   }, [password, initialR, finalR]);

//   useEffect(() => {
//     passWordGenerator();
//   }, [length, numAllow, charAllow, setPassword]);

//   return (
//     <>
//       <h1 className="text-4xl text-center font-serif mt-4 text-white">
//         Password Generator
//       </h1>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-0 pb-2 my-12 text-orange-600 bg-gray-700">
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-4"
//             placeholder="Generated Password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//             onClick={copyPassword}
//           >
//             Copy
//           </button>
//         </div>

//         <div className="flex text-sm gap-x-2 mx-2 justify-between">
//           <div className="flex items-center gap-x-2">
//             <input
//               type="range"
//               min={6}
//               max={40}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(parseInt(e.target.value));
//               }}
//             />
//             <label>Length : {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numAllow}
//               id="numInput"
//               onChange={() => {
//                 setNumAllow((numAllow) => !numAllow);
//               }}
//             />
//             <label htmlFor="numInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllow}
//               id="charInput"
//               onChange={() => {
//                 setCharAllow((charAllow) => !charAllow);
//               }}
//             />
//             <label htmlFor="charInput">Characters</label>
//           </div>
//         </div>

//         {/* Additional Features */}
//         <div className="flex flex-col text-sm mt-2 pt-2 gap-x-2 mx-2 justify-between">
//           <div className="mb-2 text-m flex flex-col">
//             <h4>Want to select only a Specific Range of the Password?</h4>
//             <p className="flex items-center">
//               Dont Worry, We Got U <BsEmojiHeartEyes className="ml-1" />
//             </p>
//           </div>

//           <div className="flex flex-row justify-between">
//             <div className="flex items-center gap-x-1 rounded-lg">
//               <input
//                 type="number"
//                 value={initialR}
//                 onChange={handleInitialChange}
//                 placeholder="Starting Index"
//                 className="py-1 px-2 rounded-lg"
//                 min={0}
//                 max={password.length - 1}
//               />
//               <button
//                 className="bg-blue-700 text-white px-3 py-1 rounded-lg"
//               >
//                 Set Initial
//               </button>
//             </div>
//             <div className="flex items-center gap-x-1 rounded-lg ">
//               <input
//                 type="number"
//                 value={finalR}
//                 onChange={handleFinalChange}
//                 placeholder="Last Index"
//                 className="py-1 px-2 rounded-lg"
//                 min={0}
//                 max={password.length}
//               />
//               <button
//                 className="bg-blue-700 text-white px-3 py-1 ml-0 rounded-lg"
//               >
//                 Set Final
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState, useCallback, useEffect, useRef } from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import YouTube from 'react-youtube';
import "animate.css";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [password, setPassword] = useState("");
  const [initialR, changeInitialR] = useState(-1);
  const [finalR, changeFinalR] = useState(-1);

  // Ref hooks for input fields
  const passwordRef = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const passWordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  // Additional Functions
  const handleInitialChange = useCallback(
    (e) => changeInitialR(parseInt(e.target.value)),
    []
  );

  const handleFinalChange = useCallback(
    (e) => changeFinalR(parseInt(e.target.value)),
    []
  );

  const handleSetInitial = useCallback(() => {
    const value = parseInt(initialRef.current.value);
    if (!isNaN(value) && value >= 0 && value < password.length) {
      changeInitialR(value);
    }
  }, [password]);

  const handleSetFinal = useCallback(() => {
    const value = parseInt(finalRef.current.value);
    if (!isNaN(value) && value >= 0 && value <= password.length) {
      changeFinalR(value);
    }
  }, [password]);

  const copyPassword = useCallback(() => {
    const input = passwordRef.current;
    if (!input) return;

    const start = initialR !== -1 ? initialR : 0;
    const end = finalR !== -1 ? finalR : password.length;

    input.focus();
    input.setSelectionRange(start, end);
    document.execCommand('copy');
  }, [password, initialR, finalR]);

  useEffect(() => {
    passWordGenerator();
  }, [length, numAllow, charAllow, setPassword]);

  const videoId = "6ZwwapPikyQ" ;

  return (
    <>
      <YouTube videoId={videoId} className="flex justify-center" height={30} autoPlay mute/>
      <h1 className="text-4xl text-center font-serif mt-4 text-white animate__animated animate__slideInDown animate-text">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-0 pb-2 my-12 text-orange-600 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-4"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 active:scale-95"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 mx-2 justify-between">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setNumAllow((numAllow) => !numAllow);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((charAllow) => !charAllow);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>

        {/* Additional Features */}
        <div className="flex flex-col text-sm mt-2 pt-2 gap-x-2 mx-2 justify-between">
          <div className="mb-2 text-m flex flex-col">
            <h4>Want to select only a Specific Range of the Password?</h4>
            <p className="flex items-center">
              Dont Worry, We Got U <BsEmojiHeartEyes className="ml-1" />
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-x-1 rounded-lg">
              <input
                type="number"
                value={initialR}
                onChange={handleInitialChange}
                placeholder="Starting Index"
                className="py-1 px-2 rounded-lg"
                min={0}
                max={password.length - 1}
                ref={initialRef}
              />
              <button
                className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800 active:scale-95"
                onClick={handleSetInitial}
              >
                Start Index
              </button>
            </div>
            <div className="flex items-center gap-x-1 rounded-lg ">
              <input
                type="number"
                value={finalR}
                onChange={handleFinalChange}
                placeholder="Last Index"
                className="py-1 px-2 rounded-lg"
                min={0}
                max={password.length}
                ref={finalRef}
              />
              <button
                className="bg-blue-700 text-white px-3 py-1 ml-0 rounded-lg hover:bg-blue-800 active:scale-95"
                onClick={handleSetFinal}
              >
                Last Index
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
