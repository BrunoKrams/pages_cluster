# Server Hardening
This is an ansible playbook to harden running Debian 13 (Trixie) servers. It requires an existing user with sudo privileges. This user must be the same for all servers and must be able to login to each server over ssh using an SSH-key. The username and the SSH-key's location can be configured in ansible.cfg or be passed as command line arguments:
```bash
ansible-playbook playbooks/harden.yml -u username
```  
Moreover, each server must have a python3 installation where the interpreter must be located under /usr/bin/python3.