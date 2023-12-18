import { useParams } from "react-router-dom";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

const Repositories = () => {
  const { repositorio } = useParams();

  const [repo, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState([
    { state: "all", label: "Todas", active: true },
    { state: "open", label: "Abertas", active: false },
    { state: "closed", label: "Fechadas", active: false },
  ]);
  const [filtersIndex, setFiltersIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${repositorio}`),
        api.get(`/repos/${repositorio}/issues`, {
          params: {
            state: filter[filtersIndex].state,
            per_page: 5,
          },
        }),
      ]);
      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    };
    load();
  }, [repositorio, filter, filtersIndex]);

  const handlePage = (action) => {
    setPage(action === "back" ? page - 1 : page + 1);
  };

  useEffect(() => {
    const loadIssues = async () => {
      const response = await api.get(`/repos/${repositorio}/issues`, {
        params: {
          state: filter[filtersIndex].state,
          page: page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    };
    loadIssues();
  }, [page, repositorio, filter, filtersIndex]);

  const handleFilterClick = (index) => {
    setFiltersIndex(index);
  };

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={repo.owner.avatar_url} alt="" />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>
      <IssuesList>
        <FilterList active={filtersIndex}>
          {filter.map((filter, index) => (
            <button
              type="button"
              key={filter.label}
              onClick={() => {
                handleFilterClick(index);
              }}
            >
              {filter.label}
            </button>
          ))}
        </FilterList>

        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt="" />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page < 2}
        >
          Voltar
        </button>
        <span>Página {page}</span>
        <button type="button" onClick={() => handlePage("next")}>
          Próxima
        </button>
      </PageActions>
    </Container>
  );
};

export default Repositories;
