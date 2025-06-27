# Netlify Deployment Guide

## Issues Fixed

1. **Client-side Routing**: Added `_redirects` file and `netlify.toml` configuration
2. **Hydration Issues**: Fixed ThemeContext to prevent SSR hydration mismatches
3. **Error Handling**: Added global error handlers for debugging

## Deployment Steps

1. **Push your changes to GitHub**
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## Troubleshooting

If you still see a white screen:

1. **Check Netlify logs**:
   - Go to your site's deploy logs in Netlify dashboard
   - Look for build errors or warnings

2. **Check browser console**:
   - Open browser dev tools (F12)
   - Look for JavaScript errors in Console tab
   - Check Network tab for failed requests

3. **Common issues**:
   - **Build fails**: Check if all dependencies are in `package.json`
   - **404 errors**: Ensure `_redirects` file is in `public/` folder
   - **Hydration errors**: The ThemeContext fix should resolve this

## Local Testing

To test locally before deploying:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build
npm run preview
```

## Files Added/Modified

- `public/_redirects` - Handles client-side routing
- `netlify.toml` - Netlify configuration
- `src/context/ThemeContext.jsx` - Fixed hydration issues
- `src/components/Layout.jsx` - Added loading state
- `src/main.jsx` - Added error handling 