import EditTaskForm from "@/components/EditTask/EditTaskForm";

export const metadata = {
  title: "Task | Edit",
};

const EditTaskPage = ({params}) => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div class="card">
              <div
                className="card-header text-white"
                style={{ background: "var(--primaryColor)" }}
              >
                <h3 className="mb-0 text-center">Edit Task</h3>
              </div>
              <div class="card-body">
                <EditTaskForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditTaskPage;
