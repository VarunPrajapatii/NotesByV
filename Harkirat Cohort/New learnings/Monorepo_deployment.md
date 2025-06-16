# Monorepo Deployment

lets say we have a very simple monorepo project made using turborepo. It has a next app, a primsa(postgres) database, a express http backend and a websocket server.

In company you wont have just main branch. You'll have min 3 branches, dev, staging, and production.
If youre autodeploying from your github to your server, then pushing to the main branch will automatically deploy to your server which will be problomatic if some junior pushes to the main branch. 

So you have dev branch where anyone can push, and it autodeploy to the dev server/dev cluster. Then you have a production branch.

So we will create two servers, the main will deploy to staging server and production branch will be deployed to the production server.

Steps to do:
1. Create 2 servers
2. Add node, nginx to both the servers, install pnpn if using
3. Clone the monorepo to both the servers
4. Start 3 processes (next, ws, http)
    - you have to get 2 database connection strings, one for dev and one for prod. And you edit .env using vim editor and put env in that.
    - then you run commands like prisma migrate and generate and necessary commands
    - then you build all the apps.
    - then you start websocket and http process using pm2.
        - you install pmw `npm install -g pm2` and then instead of "npm run start" you do `pm2 start npm --name "app name" -- start`
5. Point our domain names to the respective servers by changing config file of nginx
`fe.veruntd.com`  
`httpser.varuntd.com`  
`wsser.varuntd.com`  
and  
`staging.fe.veruntd.com`  
`staging.httpser.varuntd.com`  
`staging.wsser.varuntd.com`  
6. Refresh nginx config
7. Test everything is working

These are the steps to deploy manually. **You should never deploy manually, its just we are practicing, you should not even ssh into your machine ever.**

**eventually when we reach ASGs or we reach kubernetes, youll see we will not have to do that, and generally ssh access should be closed, no developer should ever ssh into a machine, even if something is wrong you should have a remote login and you should see the log somewhere else, so never ssh into machine, today we are doing it**












---

### Why You Should Avoid SSH into Servers

* Every SSH connection is a potential **security risk**.
* If devs SSH in, they can:

  * Accidentally or maliciously delete files
  * Modify production state without tracking
  * Access secrets, tokens, database passwords

**Best practice:** Only allow automated agents (CI/CD, orchestration tools) to access servers.

In systems like **Auto Scaling Groups (ASGs)** or **Kubernetes**, we **don’t fix broken machines** — we **replace them**.

* If a server goes bad, it’s destroyed and a new one is created from a clean template (AMIs or containers).
* This is called **immutable infrastructure** — you never "patch" a running machine manually.
* SSHing into a container or pod breaks this model.

> No "pets", only "cattle" — if a machine breaks, you don't nurse it back to health, you replace it.

In production:

* Logs go to a **central location**: Grafana, Prometheus, ELK (Elasticsearch), Datadog, etc.
* You never tail logs from inside the server.
* Monitoring dashboards and alerts tell you what’s broken.

> Proper systems give you full visibility without SSH.

**Declarative Infrastructure (Kubernetes, Terraform)**

* You declare your app's desired state: “3 pods running version 1.2.0”
* If something drifts from that state, Kubernetes or infra tools will **automatically fix it**
* Manually changing things (via SSH) will break this self-healing loop

 **Collaboration and Accountability**

* If you SSH into a server and make changes, it:

  * Doesn’t leave logs or history
  * Can’t be reviewed or audited by your team
* CI/CD pipelines, GitOps, or Infrastructure-as-Code ensure changes are **visible**, **reviewable**, and **reproducible**

---

> "Today we are doing it manually to understand **what happens behind the scenes**."

You’re learning the fundamentals:

* Setting up environments
* Deploying code
* Debugging services
* Configuring Nginx, systemd, etc.

Once you know how to do all this manually, you can later automate and scale it with:

* GitHub Actions
* Docker
* Kubernetes
* ASGs / Load balancers
* GitOps tools like ArgoCD or Flux

