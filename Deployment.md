# GitHub Pages Deployment Guide (Bun Version)

This guide will help you deploy your Marriage Biodata Generator to GitHub Pages using Bun and the gh-pages package.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Bun installed ([Installation Guide](https://bun.sh/docs/installation))

## 🟡 **Bun Setup**

Since you're using Bun, the deployment process is optimized for Bun's speed and efficiency.

### Quick Commands with Bun:

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Deploy to GitHub Pages
bun run deploy
```

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `marriage-biodata-generator`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README if you're uploading existing code

### 2. Update Configuration Files

Before deploying, you need to update the configuration with your GitHub username and repository name:

#### Update package.json

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` in the homepage field:

```json
"homepage": "https://yourusername.github.io/marriage-biodata-generator"
```

#### Update vite.config.ts

Replace `YOUR_REPOSITORY_NAME` with your actual repository name:

```typescript
base: process.env.NODE_ENV === 'production' ? '/marriage-biodata-generator/' : '/',
```

### 3. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Marriage Biodata Generator"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/marriage-biodata-generator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Install Dependencies with Bun

```bash
# Install all dependencies including gh-pages
bun install
```

### 5. Deploy to GitHub Pages

#### Method 1: Using Bun script (Recommended)

```bash
# Build and deploy in one command
bun run deploy
```

#### Method 2: Using the Bun deploy script

```bash
# Make the script executable and run it
chmod +x deploy-bun.sh
./deploy-bun.sh
```

#### Method 3: Manual deployment with Bun

```bash
# Build the project
bun run build

# Deploy the dist folder to gh-pages branch
bun run gh-pages -d dist
```

### 6. Enable GitHub Pages (if using manual method)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 7. Access Your Deployed Site

After deployment, your site will be available at:

```
https://yourusername.github.io/marriage-biodata-generator
```

Note: It may take a few minutes for the site to be live after the first deployment.

## Automated Deployment with GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site when you push to the main branch.

### To use automated deployment:

1. Push your code to the main branch
2. The GitHub Action will automatically build and deploy your site
3. No need to run `npm run deploy` manually

## Common Issues and Solutions

### 1. Base Path Issues

If your assets are not loading correctly, ensure the `base` path in `vite.config.ts` matches your repository name.

### 2. 404 Errors

Make sure your repository name in the `homepage` field of `package.json` exactly matches your GitHub repository name.

### 3. Build Failures

Check that all dependencies are properly installed and there are no TypeScript errors:

```bash
npm run lint
npm run build
```

### 4. Permissions Error

If you get permission errors, make sure your GitHub token has the necessary permissions for GitHub Pages.

## Development Workflow

For ongoing development:

1. Make changes to your code
2. Test locally: `npm run dev`
3. Commit changes: `git add . && git commit -m "Your message"`
4. Push to GitHub: `git push origin main`
5. If using GitHub Actions, deployment will happen automatically
6. If using manual deployment: `npm run deploy`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in your repository's Pages settings

## Scripts Explanation

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run predeploy` - Runs automatically before deploy (builds the project)
- `npm run deploy` - Deploy to GitHub Pages

## File Structure for Deployment

```
marriage-biodata-generator/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── dist/                       # Build output (auto-generated)
├── public/                     # Static assets
├── src/                        # Source code
├── package.json               # Updated with homepage and deploy scripts
├── vite.config.ts            # Updated with base path
└── DEPLOYMENT.md             # This file
```

Happy deploying! 🚀
