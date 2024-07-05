


function HeaderText() {
  return (
    // center the content and enlarge the text
    <div>
      <h1 className="text-5xl text-center p-5">Welcome To Your Tech AI Interview</h1>
    </div>
  );
}

function ResumeUpload() {
  return (
    <div>
      <label htmlFor="resumeUpload">Upload Your Resume</label>
      <input type="file" id="resumeUpload" name="resume" accept=".pdf" />
    </div>
  );
}

function QuestionBlock() {

  return (
    <div className="text-card">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Question</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vivamus maximus ultricies pulvinar. Aenean vel turpis ac nulla pretium lacinia. Duis rutrum dui ac nunc sagittis, ut laoreet turpis aliquam. Fusce vitae orci lectus. Vivamus tempus, orci a sollicitudin dignissim, ligula quam tincidunt risus, non fringilla nulla metus in lectus. Nullam vestibulum ligula at quam euismod, id bibendum felis viverra. Nam feugiat egestas metus, non fermentum turpis.
        </div>
  );
}

function SolveButton() {
  return (
    <button className="solve-button">Solve</button>
  );
}

function GenerateNewQuestion() {
  return (
    <button className="generate-button">Generate New Question</button>
  );
  
}

function GithubLink() {
  //to do

}


export default function Home() {
  return (
    <>
    <HeaderText />
    <div className="button-row">
      <ResumeUpload />
      <GenerateNewQuestion />
    </div>

    <QuestionBlock />
    <SolveButton />
    </>
  );
}
